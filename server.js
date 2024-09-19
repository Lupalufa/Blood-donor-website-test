// Configurando o servidor //
const express = require("express")
const server = express()

// Configurar o servidor para arquivos  //
server.use(express.static('frontend'))

// Habilitando body do formulario //
server.use(express.urlencoded({extended: true}))

// Configurando a template engine //
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server,
    noCache: false, // Booleano //
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
    return res.render("index.html", { donors })
})

server.post("/", function(req, res){
    // Pegar dados do formulario //
    const name = req.body.name
    const email = req.body.email
    const blood = req.body.blood

    donors.push({
        name: name,
        blood: blood,
    })

    return res.redirect("/")
})


// Ligando o servidor e permiir o acesso na porta 3000 //
server.listen(3000, function(){
    console.log("iniciei o servidor.")
})