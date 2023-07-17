const express = require("express")

const fs = require("fs")

const app = express()

const PORT = 8080

 app.get("/signlnm", (_, res) => {
    const signinHTML = fs.readFileSync(__dirname + "/html/signIn.html", "utf-8")
    res.send(signlnHTML)
 })

 app.get("/signup", (_, res) => {
    const signupHTML = fs.readFileSync(__dirname + "/html/signUp.html", "utf-8")
    res.send(signupHTML)
 })


 app.get("/index", (_, res) => {
   //Si la personne n'est pas connecté
   //res.redirect('/html/signIn')
    const indexHTML = fs.readFileSync(__dirname + "/html/index.html", "utf-8")
    res.send(indexHTML)
    
 })

 app.get("/venteoccasion.html", (_, res) =>{
   const venteHTML = fs.readFileSync(__dirname + "/html/venteoccasion.html", "utf-8")
   res.send(venteHTML)
 })

 app.get("/contact.html", (_, res) => {
   const contactHTML = fs.readFileSync(__dirname + "/html/contact.html", "utf-8")
   res.send(contactHTML)
   
 })

 app.use("/css", express.static(__dirname + "/css"))

 app.use("/bootstrap", express.static(__dirname + "/bootstrap/js/bootstrap.min.js"))
 

 app.use('*', (req, res) => {
   res.send(fs.readFileSync(__dirname + "/html/notfound.html", "utf-8"))
 })
app.listen(PORT, () => {
    console.log("le serveur est lancé sur le port " + PORT)
})

