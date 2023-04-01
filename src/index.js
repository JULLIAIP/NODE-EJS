const express = require("express");
const countries = require("./countries")

//1º instancia o express
const app = express()

// consfiguração que diz que a maquina de renderização vai aceitar ejs
app.set("view engine", "ejs")

//criando rota
app.get("/", (req, res) => {

    res.render("pages/home", {
        data: countries
    })

})

app.get("/about", (req, res) => {

    res.render("pages/about")

})

//função do express que ouve uma porta

app.listen(3003)
console.log("rodando na porta 3003")
console.table(countries)


