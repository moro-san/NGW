from selenium.webdriver.common.by import By 
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException, ElementClickInterceptedException
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver import Chrome
import logging
import time
import os
import re

# Configurazione del logger
logging.basicConfig(level=logging.INFO)
 
# Percorso del driver di Chrome specifico
chrome_driver_path = r"/Users/marco/desktop/NGW+/PYTHON-SELENIUM/chromedriver-mac-x64/chromedriver"
 
# Inizializzo il servizio con il percorso specifico del driver di Chrome
service = Service(chrome_driver_path)
 
# Inizializzo le opzioni del browser Chrome
options = Options()
 
# DIRECTORY DI DESTINAZIONE DEI FILE
PATH = r"/Users/marco/desktop/NGW+/PYTHON-SELENIUM/doc_arpaLazio"
 
options.add_experimental_option("prefs", {
    "download.default_directory": PATH,
    "directory_upgrade": True,
    "profile.default_content_settings.popups": 0,
    "plugins.always_open_pdf_externally": True,
    "safebrowsing.enabled": True  # Abilita il safe browsing per evitare problemi con i download
})

#Funzione per svuotare la cartella di destinazione dei download 
def pulisci_cartella_download(folder_path):
    for nome_file in os.listdir(folder_path):
        percorso_file = os.path.join(folder_path, nome_file)
        try:
            if os.path.isfile(percorso_file):
                os.unlink(percorso_file)
        except Exception as e:
            logging.error(f"Errore nel cancellare {percorso_file}. Motivo: {e}")
 
# Avvio del driver di Chrome
driver = Chrome(service=service, options=options)
 
driver.get("https://www.arpalazio.it/")
 
# Impostazione di un tempo di attesa per il caricamento della pagina
driver.implicitly_wait(10)
 
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
 
 
# Funzione per cliccare sul bottone "Servizi"
def clicca_bottone_servizi(driver):
    try:
        # Trova il bottone "Servizi"
        button = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, 'button#Servizi'))
        )
        # Forza il click con JavaScript
        driver.execute_script("arguments[0].click();", button)
        logging.info("Bottone 'Servizi' cliccato con successo.")
    except NoSuchElementException:
        logging.error("Il bottone 'Servizi' non è stato trovato.")
    except Exception as e:
        logging.error(f"Errore imprevisto: {str(e)}")
 
 
# Funzione per cliccare sul link "Tariffario"
def clicca_link_tariffario(driver):
    try:
        # Attendi che il link "Tariffario" sia visibile
        link = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, 'a[aria-label="Tariffario"]'))
        )
        # Clicca sul link
        link.click()
        logging.info("Link 'Tariffario' cliccato con successo.")
        # Attendi che la nuova pagina si carichi e accetta i cookie
        WebDriverWait(driver, 10).until(EC.title_contains("Tariffario"))  # Attendere che il titolo della pagina indichi che siamo sulla pagina "Tariffario"
        accetta_cookie(driver)  # Chiamata per accettare nuovamente i cookie
    except NoSuchElementException:
        logging.error("Il link 'Tariffario' non è stato trovato.")
    except ElementClickInterceptedException:
        logging.error("Il click sul link 'Tariffario' è stato bloccato.")
    except Exception as e:
        logging.error(f"Errore imprevisto: {str(e)}")

 
#Funzione per scaricare i documenti dalla pagina "Tariffario"
def scarica_documenti(driver):
    try:
        links = driver.find_elements(By.CSS_SELECTOR, 'a[href$=".pdf"]')
        if not links: 
            logging.warning("Nessun documento PDF trovato.")
            return []
        
        documenti_scaricati = []
        
        files_presenti = os.listdir(PATH)
        
        for link in links: 
            documento_url = link.get_attribute("href")
            nome_documento = documento_url.split("/")[-1]
            
            if nome_documento in files_presenti:
                logging.info (f"Il documento {nome_documento} è già stato scaricato")
                continue
                
            logging.info(f"Scaricando documento: {nome_documento}")  
            documenti_scaricati.append(nome_documento)   
            link.click()
            time.sleep(5)
            
        logging.info("Documenti scaricati: ")
        for documento in documenti_scaricati:
            logging.info(f"- {documento}")
            
        return documenti_scaricati
        
    except Exception as e:
        logging.error(f"Errore durante il download dei documenti: {str(e)}")
        return []
    
 
 
# Esegui le funzioni precedenti e scarica i documenti
accetta_cookie(driver)
clicca_bottone_servizi(driver)
clicca_link_tariffario(driver)
documenti_scaricati = scarica_documenti(driver)


# Chiudi il browser al termine
driver.quit()