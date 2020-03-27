// express para criar e configurar o servidor
const express = require("express")
const server = express()

// variable to frontend
// itens of page
const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de Programação",
        cotegory: "Estudo",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, minima vel quia minus cumque reprehenderit assumenda temporibus reiciendis harum accusamus placeat, officiis iure, modi cum magnam consectetur nostrum? Ipsam, maiores.",
        url: "https://youtube.com"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercises",
        cotegory: "Health",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, minima vel quia minus cumque reprehenderit assumenda temporibus reiciendis harum accusamus placeat, officiis iure, modi cum magnam consectetur nostrum? Ipsam, maiores.",
        url: "https://youtube.com"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditation",
        cotegory: "Mentalidade",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, minima vel quia minus cumque reprehenderit assumenda temporibus reiciendis harum accusamus placeat, officiis iure, modi cum magnam consectetur nostrum? Ipsam, maiores.",
        url: "https://youtube.com"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title: "Karaoke",
        cotegory: "Diversão",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, minima vel quia minus cumque reprehenderit assumenda temporibus reiciendis harum accusamus placeat, officiis iure, modi cum magnam consectetur nostrum? Ipsam, maiores.",
        url: "https://youtube.com"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729038.svg",
        title: "Pintura",
        cotegory: "Criatividade",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, minima vel quia minus cumque reprehenderit assumenda temporibus reiciendis harum accusamus placeat, officiis iure, modi cum magnam consectetur nostrum? Ipsam, maiores.",
        url: "https://youtube.com"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729042.svg",
        title: "Bons Filmes",
        cotegory: "Entertrenimento",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, minima vel quia minus cumque reprehenderit assumenda temporibus reiciendis harum accusamus placeat, officiis iure, modi cum magnam consectetur nostrum? Ipsam, maiores.",
        url: "https://youtube.com"
    }    
]


// config statics file
server.use(express.static("public"))

//config do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true,
})

// criei uma rota /
// captura o pedido do cliente para responder
server.get("/", function(req, res) {

    const reverseIdeas = [...ideas].reverse()

    let lastideas = []
    for (let idea of reverseIdeas) {
        if (lastideas.length < 2) {
            lastideas.push(idea)
        }
    }
    return res.render("index.html", { ideas: lastideas })
})

server.get("/ideias", function(req, res) {

    const reverseIdeas = [...ideas].reverse()

    return res.render("ideias.html", { ideas: reverseIdeas})
})

// ligando o servidor
server.listen(3000)
