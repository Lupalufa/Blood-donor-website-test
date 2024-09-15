// Configurando o servidor //
const express = require("express")
const server = express()

// Configurando a template engine //
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server
})

// configurando a apresentação da página // 
server.get("/", function(req, res){
    return res.render("index.html")
})


// Ligando o servidor e permiir o acesso na porta 3000 //
server.listen(3000, function(){
    console.log("iniciei o servidor.")
})