// express para criar e configurar o servidor
const express = require("express")
const server = express()

const db = require("./db")


// variable to frontend
// itens of page
/* const ideas = [
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
] */


// config statics file
server.use(express.static("public"))

// to habilitity use os req.body
server.use(express.urlencoded({ extended: true}))

//config do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true,
})

// criei uma rota /
// captura o pedido do cliente para responder
server.get("/", function (req, res) {

    db.all(`SELECT * FROM ideas`, function (err, rows) {
        if (err) {
            console.log(err)
            return res.send("Erro no DB!")
        }

        const reverseIdeas = [...rows].reverse()

        let lastideas = []
        for (let idea of reverseIdeas) {
            if (lastideas.length < 2) {
                lastideas.push(idea)
            }
        }
        return res.render("index.html", { ideas: lastideas })
    })


})

server.get("/ideias", function (req, res) {   

    db.all(`SELECT * FROM ideas`, function (err, rows) {
        if (err) {
            console.log(err)
            return res.send("Erro no DB!")
        }

        const reverseIdeas = [...rows].reverse()
    
        return res.render("ideias.html", { ideas: reverseIdeas })
    })

})

server.post("/", function(req, res){
    // input data on table
    const query = `
    INSERT INTO ideas (
            image,
            title,
            category,
            description,
            link
        ) VALUES (?, ? , ?, ? ,? );
    `
    const values = [
        req.body.image,
        req.body.title,
        req.body.category,
        req.body.description,
        req.body.link
    ]

    db.run(query, values, function(err){
        if (err) {
            console.log(err)
            return res.send("Erro no DB!")
        }

        return res.redirect("/ideias")

    })
})

// ligando o servidor
server.listen(3000)
