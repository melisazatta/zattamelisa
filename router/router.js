const { Router } = require("express");
const router = new Router();
const mysql = require("mysql");

// Conexión a base de datos
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "zattamelisa"
});

conn.connect((err) => {
  if (err) throw err;
  console.log("CONEXION ESTABLECIDA...");
});

  // SELECT 
router.get('/lista', (req, res) => {
  let sql = "SELECT * FROM producto";
  let query = conn.query(sql, (err, results) => {
      if (err) throw err;
      res.render('../views/lista', {
          results: results
      });
  });
});

// Insert 
router.post('/save', (req, res) => {
  let data = { producto_nombre: req.body.producto_nombre, producto_precio: req.body.producto_precio };
  let sql = "INSERT INTO producto SET ?";
  let query = conn.query(sql, data, (err, results) => {
      if (err) throw err;
      res.redirect('/lista');
  });
});

// UPDATE
router.post('/update', (req, res) => {
  let sql = "UPDATE producto SET producto_nombre='" + req.body.producto_nombre + "', producto_precio='" + req.body.producto_precio + "' WHERE producto_id=" + req.body.id;
  let query = conn.query(sql, (err, results) => {
      if (err) throw err;
      res.redirect('/lista');
  });
});

// DELETE
router.post('/delete', (req, res) => {
  let sql = "DELETE FROM producto WHERE producto_id=" + req.body.producto_id + "";
  let query = conn.query(sql, (err, results) => {
      if (err) throw err;
      res.redirect('/lista');
  });
});

// Rutas
router.get("/", (req, res) => {
  res.render("index");
});

router.get("/lista", (req, res) => {
  res.render("lista");
});

router.get("/servicios", (req, res) => {
  res.render("servicios");
});

router.get("*", (req, res)=>{
    res.render("404");
  });


module.exports = router;
