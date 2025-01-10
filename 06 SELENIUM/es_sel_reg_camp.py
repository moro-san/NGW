import re
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver import Chrome
from datetime import datetime
import logging
import time


# Configurazione del logger
logging.basicConfig(level=logging.INFO)

# Percorso del driver di Chrome specifico
chrome_driver_path = r"/Users/marco/desktop/NGW+/PYTHON-SELENIUM/chromedriver-mac-x64/chromedriver"
# DIRECTORY DI DESTINAZIONE DEI FILE
PATH = r"/Users/marco/desktop/NGW+/PYTHON-SELENIUM/doc_regCamp"

# Inizializzo le opzioni del browser Chrome
options = Options()
options.add_experimental_option("prefs", {
    "download.default_directory": PATH,
    "directory_upgrade": True,
    "profile.default_content_settings.popups": 0,
    "plugins.always_open_pdf_externally": True,
    "safebrowsing.enabled": True  # Abilita il safe browsing per evitare problemi con i download
})

# Inizializzo il servizio con il percorso specifico del driver di Chrome
service = Service(chrome_driver_path)
# Avvio del driver di Chrome
driver = Chrome(service=service, options=options)

driver.get("https://www.albopretorionline.it/campania/alboente.aspx")

# Impostazione di un tempo di attesa per il caricamento della pagina
driver.implicitly_wait(10)

# Funzione per accettare i cookie
def accetta_cookie(driver):
    try:
        # Trova il bottone per accettare i cookie
        button = WebDriverWait(driver, 10).until(
           EC.presence_of_element_located((By.CSS_SELECTOR, 'button.acceptcookies'))
        )
        # Forza il click con JavaScript
        driver.execute_script("arguments[0].click();", button)
        logging.info("Cookie accettati con successo.")
    except NoSuchElementException:
        logging.error("Il bottone per accettare i cookie non è stato trovato.")
    except Exception as e:
        logging.error(f"Errore imprevisto: {str(e)}")

# Funzione per cliccare sul bottone "Cerca"
def clicca_bottone_cerca(driver):
    try:
        # Trova il bottone "Cerca"
        button = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, 'input#btCerca'))
        )
        # Forza il click con JavaScript
        driver.execute_script("arguments[0].click();", button)
        logging.info("Bottone 'Cerca' cliccato con successo.")
    except NoSuchElementException:
        logging.error("Il bottone 'Cerca' non è stato trovato.")
    except Exception as e:
        logging.error(f"Errore imprevisto: {str(e)}")

# Funzione per estrarre il numero di atto dal testo
def estrai_numero_atto(text):
    pattern = re.compile(
        r"Proc\. n\. (\d+)/\d+|"  # 'Proc. n. X/XX'
        r"\(Proc\. (\d+)/\d+\)|"  # '(Proc. X/XX)'
        r"Proc\. (\d+)/\d+|"  # 'Proc. X/XX'
        r": Proc\.(\d+)/\d+-|"  # ': Proc.X/XX-'
        r"PROC\.\s(\d+)/\d+\s-|"  # 'PROC. X/XX -'
        r"(\d+)/\d+-|"  # 'X/XX-'
        r"proc\.\s(\d+)/\d+|"  # 'proc. X/XX'
        r"Proc\.(\d+)/\d+|"  # 'Proc.X/XX'
        r"proc\.\s(\d+)/\d+|"  # 'proc. X/XX'
        r"proc\.(\d+)/\d+|"  # 'proc. X/XX' senza spazio
        r"PROC\.\s(\d+)/\d+|"  # 'PROC. X/XX'
        r"D\. D\. n\. (\d+)"  # 'D. D. n. X'
    )
    match = pattern.search(text)
    if match:
        for group in match.groups():
            if group:
                return int(group)
    return None

# Funzione per scaricare i documenti
def scarica_documenti(driver):
    risultati = []
    
    # Trova tutti gli elementi <li> che contengono le informazioni
    elementi_lista = driver.find_elements(By.XPATH, "//ul/li")
    
    logging.info (f"Numero totale di elementi trovati: {len(elementi_lista)}")
    
    for elemento in elementi_lista:
        try:
            # Estrai il testo dell'elemento <li>
            testo = elemento.text
            
            # Estrai le date di pubblicazione
            pattern_date = r"In pubblicazione dal (\d{2}-\d{2}-\d{4}) al (\d{2}-\d{2}-\d{4})"
            match_date = re.search(pattern_date, testo)
            data_inizio = match_date.group(1) if match_date else None
            data_fine = match_date.group(2) if match_date else None
            
            # Estrai il numero di procedimento
            numero_procedimento = estrai_numero_atto(testo)
            
            # Trova i documenti collegati (link <a>)
            documenti = elemento.find_elements(By.XPATH, ".//a[contains(@href, 'download.aspx')]")
            for documento in documenti:
                nome_file = documento.text
                url_file = documento.get_attribute("href")
                
                 # Ottieni la data e ora di download
                data_download = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                
                
                # Clicca sul documento per scaricarlo
                driver.execute_script("arguments[0].click();", documento)
                logging.info(f"Scaricato il file: {nome_file} dall'URL: {url_file}")
                
                # Aggiungi i dati al dizionario dei risultati
                risultati.append({
                    "data_inizio": data_inizio,
                    "data_fine": data_fine,
                    "numero_procedimento": numero_procedimento,
                    "nome_file": nome_file,
                    "url_file": url_file,
                    "data_download": data_download
                })
                
                # Pausa per consentire il download
                time.sleep(5)
        
        except Exception as e:
            logging.error(f"Errore durante l'elaborazione dell'elemento: {e}")
    
    return risultati

try:
    accetta_cookie(driver)
    clicca_bottone_cerca(driver)
    time.sleep(5)
    risultati = scarica_documenti(driver)
    
    
   

    for file_info in risultati:
        print(f''' Nome File: {file_info['nome_file']} - URL: {file_info['url_file']} - Inizio: {file_info['data_inizio']} - Fine: {file_info['data_fine']} - Numero Procedimento: {file_info['numero_procedimento']} - Data Download: {file_info['data_download']} ''')
        
except Exception as e:
    logging.error(f"Errore durante l'esecuzione del codice: {e}")
    
print (risultati)

driver.quit()