const express = require("express");
const session = require("express-session");
const hbs = require("hbs");

require ("dotenv").config();

const app = express();
const port = process.env.PORT || 8000;

//contenido estatico
app.use(express.static("public"));

//handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials/");

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: "122456htelshstbk",
    resave: true,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/tienda", (req, res)=>{
  res.render("tienda");
});

app.post("/registro", (req, res) => {
  req.session.myvariable = req.body;
  res.redirect("/perfil");
});
app.get("/perfil", (req, res) => {
  const usuario = req.session.myvariable;
  delete req.session.myvariable;
  res.render("perfil", {
    usuario,
  });
});

app.get("*", (req, res)=>{
  res.send("404");
});

app.listen(8000, () => {
  console.log(`Usando el puerto http://localhost:${port}`);
});
