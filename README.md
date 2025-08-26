
# GuardaTreco

O GuardaTreco é um bot do Discord, que pode armazenar e fazer muitas coisas. Possui calculadora, conversor de moedas e sua grande especifidade é ser um gerenciador de contas e boletos. 


## Funcionalidades

- Cadastro de contas (CRD)
- Lembrete de pagamento
- Calculadora
- Soma de valores de contas


## Aprendizados

Primeiro aprendi a como Criar um Bot no Discord e como que ele funcionava. Usei a biblioteca Discord.js e comecei a fazer comandos somente para entender como funcionava. Depois pensei qual seria a melhor forma de guardar estes dados, sei que queria um não relacional por ter maior liberdade para guardar quaisquer dados, escolhi o MongoDB, utilizei a forma grátis dele. Depois pensei em como criar a API, decidi usar uma biblioteca que ja estou acostumado que é a FastAPI. Um diferencial desse projeto é que eu tentei não usar IA de forma alguma, para eu aprender a ler documentações e ir atrás das soluções. Pedia para IA orientações de como eu poderia fazer tal coisa, e não a coisa diretamente. 


## Documentação da API

#### Cria uma conta

```http
  POST /contas
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `valor, data, nome` | `int, string, string` | **Obrigatório**. São os dados da sua conta |

#### Listar contas

```http
  GET /contas
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `sem parâmetro`      | `` | **Obrigatório**. Não precisa de parâmetro, apenas dar o comando |

#### Deletar contas

```http
  DELETE /contas
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nome`      | `string` | **Obrigatório**. Nome da conta a ser deletada |

#### Totalizar valores

```http
  GET /total
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| ``      | `string` | **Obrigatório**.  |Não precisa de parâmetro, apenas dar o comando

#### Contas que vencem amanhã
```http
  GET /vencem_amanha
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| ``      | `string` | **Obrigatório**.  |Não precisa de parâmetro, apenas dar o comando




## Screenshots

![App Screenshot](Screenshot/{271CDE7A-A069-46DB-AC1F-1AAE2DF94C16}.png)

