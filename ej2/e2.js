const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("HOLA bienvenidoooo");
});

app.get("/productos", (req, res) => {
  res.send((innerHTML = "<h1>Crear Producto</h1>"));
});

app.put("/productos", (req, res) => {
  res.send("actualizar Producto");
});

app.delete("/productos", (req, res) => {
  res.send("borrar Producto");
});

app.get("/usuarios", (req, res) => {
  res.send("listado de usuarios");
});

app.post("/usuarios", (req, res) => {
  res.send("crear usuario");
});

app.put("/usuarios", (req, res) => {
  res.send("Actualizar usuario");
});

app.delete("/usuarios", (req, res) => {
  res.send("Borrar usuario");
});

//he utilizado postman para las comprobar las llamadas.

app.listen(port, () => {
  console.log(`Servidor creado en el puerto ${port}`);
});
