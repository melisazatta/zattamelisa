const express = require("express");
const hbs = require("hbs");
const path = require("path");
require ("dotenv").config();

const app = express();
const port = process.env.PORT;

//handlebars
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials/");

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//contenido estatico
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static("public"));
app.use(require ('./router/router'));
app.use(require ('./router/contacto'));



app.listen(port, () => {
  console.log(`Usando el puerto http://localhost:${port}`);
});
