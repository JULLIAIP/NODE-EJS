const express = require("express")

//1º instancia o express
const app = express()

// consfiguração que diz que a maquina de renderização vai aceitar ejs
app.set("view engine", "ejs")

//criando rota
app.get("/", (req, res) => {

    res.render("index")

})

app.get("/about", (req, res) => {

    res.render("about")

})

//função do express que ouve uma porta

app.listen(3003)
console.log("roando na porta 3003")


