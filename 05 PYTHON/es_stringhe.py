frase = input ("Ciao Utente, inserisci una stringa ")
print(len(frase))


parola = input ("Ciao Utente, inserisci una parola? ")
if len(parola)>=3:
    print (parola[:3])
else:
    print ("la parola è troppo corta")


frase2 = input ("Ciao Utente, inserisci una frase per favore ")
parola2 = input ("Ciao Utente per favore sostituisci una parola nella frase ")
parola3 = input ("Con quale parola vuoi sostituirla? ")
frase_def = frase2.replace (parola2, parola3)
print (f"Ecco la nuova frase con la parola modificata: {frase_def}")

