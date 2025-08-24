
from fastapi import FastAPI
from pydantic import BaseModel
from database import db


app = FastAPI()


# Modelo de dados
class Conta(BaseModel):
    valor: int
    data: str
    nome: str


# Criar conta
@app.post("/contas")
def criar_conta(conta: Conta):
    resultado = db.Contas.contas.insert_one(conta.dict())
    return {"id": str(resultado.inserted_id)}


# Listar contas
@app.get("/contas")
def listar_contas():
    contas = []
    cursor = db.Contas.contas.find({})
    for doc in cursor:
        doc["_id"] = str(doc["_id"])  # ObjectId não é serializável
        contas.append(doc)
    return contas

@app.delete("/contas")
def deletar_item(nome: str):
    db.Contas.contas.delete_one({"nome": nome})
    return {"message": "Conta: ${nome} deletado"}

