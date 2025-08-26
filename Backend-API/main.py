
from fastapi import FastAPI
from pydantic import BaseModel
from database import db
from datetime import datetime, timedelta


app = FastAPI()


# Modelo de dados
class Conta(BaseModel):
    valor: int
    data: str
    nome: str

total = 0

@app.post("/contas")
def criar_conta(conta: Conta):
    resultado = db.Contas.contas.insert_one(conta.dict())
    current_datetime = datetime.now()
    texto = (
    f"\nA conta foi adicionada, com data de vencimento {conta.data}, "
    f"com valor {conta.valor} com o nome de {conta.nome} no momento {current_datetime}.")
    with open('logs.txt', 'a') as arquivo:
        arquivo.write(texto)
    return {"id": str(resultado.inserted_id)}


# Listar contas
@app.get("/contas")
def listar_contas():
    contas = []
    cursor = db.Contas.contas.find({})
    for doc in cursor:
        doc["_id"] = str(doc["_id"])
        contas.append(doc)
    current_datetime = datetime.now()
    texto = f"\nAs contas foram listadas no momento {current_datetime}."
    with open('logs.txt', 'a') as arquivo:
        arquivo.write(texto)
    return contas

@app.delete("/contas")
def deletar_item(nome: str):
    cursor = db.Contas.contas.find({"nome": nome})
    db.Contas.contas.delete_one({"nome": nome})
    current_datetime = datetime.now()
    texto = (
    f"\nA conta com nome {nome} foi excluída no momento {current_datetime}.")
    with open('logs.txt', 'a') as arquivo:
        arquivo.write(texto)
    return {"message": f"Conta: ${nome} deletada com sucesso!"}

@app.get("/total")
def get_total():
    total = sum(doc["valor"] for doc in db.Contas.contas.find({}))
    current_datetime = datetime.now()
    texto = (
    f"\nAs contas foram somadas no momento {current_datetime}.")
    with open('logs.txt', 'a') as arquivo:
        arquivo.write(texto)
    return {"total": total}

@app.get("/vencem_amanha")
def contas_vencem_amanha():
    amanha = (datetime.now() + timedelta(days=1)).strftime("%Y-%m-%d")
    contas = db.Contas.contas.find({"data": amanha})
    contador = sum(1 for _ in contas)
    return {"quantidade": contador}
