const express = require("express")
const app = express()

app.get("/",function(req,res){
  res.send("<h1>Bem vindo ao meu site</h1>")
})

app.get("/blog/:artigo?",function(req, res){

  var artigo = req.params.artigo

  if(artigo){
      res.send("<h2>Artigo: " + artigo + " </h2>")
  }else{
      res.send("<h3>Bem vindo ao meu blog!</h3>")
  }
})

app.get("/canal/youtube", function(req, res){
  var canal = req.query["canal"]

  if(canal){
      res.send(canal)
  }else{
      res.send("Nenhum canal fornecido!")
  }
})

app.get("/ola/:nome", function(req, res){
  var nome = req.params.nome
  res.send("<h1>Oi " + nome + " </h1>")
})


app.listen(4000,function(erro){
  if(erro){
      console.log("Ocorreu um erro!")
  }else{
      console.log("Servidor iniciado com sucesso!")
  }
})
