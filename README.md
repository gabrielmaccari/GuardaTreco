
<p align="center">
  <h1 align="center">GuardaTreco | NodeJS & Discord.js :rocket:</h1>
</p>

## 💻 About


<div>

GuardaTreco is a bot of Discord. It is able to do Account Management, like electricity bill, internet bill or girlfriend costs. It can store your costs very fast and more simple, because it's a Bot, with technologies.
 

</div>

## 🎧 Features:

* Costs register (CRD)
* Payment reminder 
* Calculator
* Sum of account values
* Focus on high performance

  
## ✅ Requirements:

* **[Discord.js](https://discord.js.org/#/)**
* **[Node.js](https://nodejs.org/en/)**


## ✅ How I did it?
First, I learned how to create a bot in Discord and how it worked. I used the Discord.js library and started creating commands just to understand how it worked. Then I considered the best way to store this data. I knew I wanted a non-relational one because it gave me greater freedom to store any data. I chose MongoDB, using its free version. Then I thought about how to create the API and decided to use a library I'm already familiar with, FastAPI. What sets this project apart is that I tried not to use AI at all, so I could learn to read documentation and pursue solutions. I asked the AI ​​for guidance on how to do something, rather than the actual thing.


## 🐋 API Documentation

#### Create billing account

```http
  POST /contas
```

| Parameter   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `valor, data, nome` | `int, string, string` | **Mandatory**. Your data bill |

#### List accounts

```http
  GET /contas
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `sem parâmetro`      | `` | **Mandatory**. Don't need parameter |

#### Delete bills

```http
  DELETE /contas
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nome`      | `string` | **Mandatory**. Don't need parameter |

#### Total values

```http
  GET /total
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| ``      | `string` |**Mandatory**. Don't need parameter|

#### Bills due tomorrow
```http
  GET /vencem_amanha
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| ``      | `string` | **Mandatory**. Don't need parameter |




## Screenshots

![App Screenshot](Screenshot/{271CDE7A-A069-46DB-AC1F-1AAE2DF94C16}.png)


## 👨‍💻 Team

* **Gabriel Maccari** - *Owner* - [Instagram](https://www.instagram.com/gabrielmaccarii/)

