// Configurando o servidor //
const express = require("express")
const server = express()

// Configurar o servidor para arquivos extras //
server.use(express.static('frontend'))

// Configurando a template engine //
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server
})

// LISTA DE DOADORES: Array //
const donors = [
    {
        name: "Diego Montane",
        blood: "AB+"
    },
    {
        name: "Flávia Rodrigues",
        blood: "A+"
    },
    {
        name: "Gabriel Monteiro",
        blood: "B-"
    },
    {
        name: "Higor Anderson",
        blood: "O+"
    },
]



// configurando a apresentação da página // 
server.get("/", function(req, res){
    return res.render("index.html", { valor: "1" })
})


// Ligando o servidor e permiir o acesso na porta 3000 //
server.listen(3000, function(){
    console.log("iniciei o servidor.")
})