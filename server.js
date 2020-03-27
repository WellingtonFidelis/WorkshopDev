// express para criar e configurar o servidor
const express = require("express")
const server = express()

// config statics file
server.use(express.static("public"))

// criei uma rota /
// captura o pedido do cliente para responder
server.get("/", function(req, res) {
    return res.sendFile(__dirname + "/index.html")
})

server.get("/ideias", function(req, res) {
    return res.sendFile(__dirname + "/ideias.html")
})

// ligando o servidor
server.listen(3000)
