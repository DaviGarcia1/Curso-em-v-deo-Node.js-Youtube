const express = require("express")
const app = express()

app.get("/", function(rec, res){
  res.sendFile(`${__dirname}/html/index.html`)
})
app.get("/sobre", function(rec, res){
  res.send("Testando novo servidor. <br> Seja bem vindo a página sobre!")
})
app.get("/teste/:nome/:cpf", function(req, res){
  res.send(`Olá ${req.params.nome}! <br> Seu cpf é: ${req.params.cpf}!`)
})

app.listen(8081, function(req, res){
  console.log("Servidor rodando na url http:localhost:8081")
})