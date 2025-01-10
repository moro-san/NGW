# Usa l'immagine di base di Python
FROM python:3.9

# Imposta la directory di lavoro
WORKDIR /usr/src/app

# Copia il file requirement.txt e installa le dipendenze
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copia il resto dell'applicazione
COPY . . 

#Generate certificato SSL
RUN openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365 -nodes \ -subj "/CN=localhost"

# Espone la porta esterna 80 e la porta interna 443
EXPOSE 80 
EXPOSE 443

# Comando per avviare l'app
CMD [ "python", "app.py" ]