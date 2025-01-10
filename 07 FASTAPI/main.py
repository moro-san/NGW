from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker
from fastapi.middleware.cors import CORSMiddleware

DATABASE_URL = "mysql+pymysql://root:root@localhost:3306/Esercizio_FastApi?unix_socket=/Applications/MAMP/tmp/mysql/mysql.sock"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class User(BaseModel):
    nome: str
    cognome: str
    email: str
    data_nascita: str
    telefono: str
    indirizzo: str
    citta: str
    ruolo: str
    stato_account: str
    

@app.get("/")
def read_root():
    return {"message": "API collegata al database"}

@app.get("/user/")
def get_user(id:int):
    try:
        db = SessionLocal()
        query = "SELECT * FROM utenti WHERE id = :id"
        result = db.execute(text(query), {"id": id})
        rows = result.fetchall()
       
        if not rows:
            return {"message": "Nessun utente trovato nella tabella 'users'"}
       
        columns = result.keys()
        data = [dict(zip(columns, row)) for row in rows]
        return {"data": data}
    except Exception as e:
        print(f"Errore SQL: {str(e)}")
        raise HTTPException(status_code=400, detail=f"Errore nella query: {str(e)}")
    finally:
        db.close()

@app.get("/users/")
def get_items():
    try:
        db = SessionLocal()
        query = "SELECT * FROM utenti"
        result = db.execute(text(query))
        rows = result.fetchall()
       
        if not rows:
            return {"message": "Nessun utente trovato nella tabella 'users'"}
       
        columns = result.keys()
        data = [dict(zip(columns, row)) for row in rows]
        return {"data": data}
    except Exception as e:
        print(f"Errore SQL: {str(e)}")
        raise HTTPException(status_code=400, detail=f"Errore nella query: {str(e)}")
    finally:
        db.close()

@app.post("/create-user/")
def create_user(user: User):
    try:
        db = SessionLocal()
        query = f'INSERT INTO utenti (`nome`, `cognome`, `email`, `data_nascita`, `telefono`, `indirizzo`, `citta`, `ruolo`, `stato_account`) VALUES ("{user.nome}", "{user.cognome}", "{user.email}", "{user.data_nascita}", "{user.telefono}", "{user.indirizzo}", "{user.citta}", "{user.ruolo}", "{user.stato_account}")'
        db.execute(text(query))
        db.commit()
        return {"message": "Elemento aggiunto correttamente"}
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Errore nella query: {str(e)}")
    finally:
        db.close()
        

@app.put("/update-user/")
def update_user(user: User, id: int):
    try:
        db = SessionLocal()
        query = f'UPDATE `utenti` SET `nome`="{user.nome}",`cognome`="{user.cognome}",`email`="{user.email}",`data_nascita`="{user.data_nascita}",`telefono`="{user.telefono}",`indirizzo`="{user.indirizzo}",`citta`="{user.citta}",`ruolo`="{user.ruolo}",`stato_account`="{user.stato_account}" WHERE `id`={id}'
        db.execute(text(query))
        db.commit()
        return {"message": "Elemento modificato correttamente"}
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Errore nella query: {str(e)}")
    finally:
        db.close()

@app.delete("/delete-user/")
def delete_user(id: int):
    try:
        db = SessionLocal()
        query = f'DELETE FROM `utenti`  WHERE `id`={id}'
        db.execute(text(query))
        db.commit()
        return {"message": "Elemento cancellato correttamente"}
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Errore nella query: {str(e)}")
    finally:
        db.close()


@app.get("/Città-user/")
def get_citta_user(citta:str):
    try:
        db = SessionLocal()
        query = "SELECT * FROM utenti WHERE citta = :citta"
        result = db.execute(text(query), {"citta": citta})
        rows = result.fetchall()
       
        if not rows:
            return {"message": "Nessun utente trovato nella tabella 'users'"}
       
        columns = result.keys()
        data = [dict(zip(columns, row)) for row in rows]
        return {"data": data}
    except Exception as e:
        print(f"Errore SQL: {str(e)}")
        raise HTTPException(status_code=400, detail=f"Errore nella query: {str(e)}")
    finally:
        db.close()
        

@app.get("/Stato-user/")
def get_stato_user(stato_account:str):
    try:
        db = SessionLocal()
        query = "SELECT * FROM utenti WHERE stato_account = :stato_account"
        result = db.execute(text(query), {"stato_account": stato_account})
        rows = result.fetchall()
       
        if not rows:
            return {"message": "Nessun utente trovato nella tabella 'users'"}
       
        columns = result.keys()
        data = [dict(zip(columns, row)) for row in rows]
        return {"data": data}
    except Exception as e:
        print(f"Errore SQL: {str(e)}")
        raise HTTPException(status_code=400, detail=f"Errore nella query: {str(e)}")
    finally:
        db.close()
