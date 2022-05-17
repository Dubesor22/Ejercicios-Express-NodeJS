const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());

const items = [
  { id: 1, nombre: "Taza de Harry Potter", precio: 300 },
  { id: 2, nombre: "FIFA 22 PS5", precio: 1000 },
  { id: 3, nombre: "Figura Goku Super Saiyan", precio: 100 },
  { id: 4, nombre: "Zelda Breath of the Wild", precio: 200 },
  { id: 5, nombre: "Skin Valorant", precio: 120 },
  { id: 6, nombre: "Taza de Star Wars", precio: 220 },
];

app.use(express.json()); //para que express entienda el req.body como objeto JSON

// Crear endpoint para poder crear un producto nuevo

app.post("/products", (req, res) => {
  const newItem = {
    id: items.length + 1,
    nombre: req.body.nombre,
    precio: req.body.precio,
  };
  console.log(req.body);
  if (!req.body.nombre || !req.body.precio) {
    res.status(400).send("Please enter all fields");
  } else {
    items.push(newItem);
    // console.log(newItem);
    const response = { newItem, items };
    res.status(201).send(response);
  }
});

// Crear endpoint para poder actualizar un producto

app.put("/products/:id", (req, res) => {
  const found = items.some((item) => item.id === +req.params.id);
  console.log(found);
  if (found) {
    items.forEach((item) => {
      if (+req.params.id === item.id) {
        // item.id = req.body.id ? req.body.id : item.id;
        item.nombre = req.body.nombre ? req.body.nombre : item.nombre;
        item.precio = req.body.precio ? req.body.precio : item.precio;
        res.send(item);
      }
    });
  } else {
    res.status(404).send(`Product with id ${req.params.id} not found`);
  }
});

// Crear endpoint para poder eliminar un producto

app.delete("/products/:id", (req, res) => {
  const found = items.some((item) => item.id === +req.params.id);

  if (found) {
    const itemsFiltered = items.filter((item) => item.id !== +req.params.id);
    res.send({
      msg: `item with id ${req.params.id} fueraaaaaa`,
      itemsFiltered,
    });
  } else {
    res.status(404).send(`item with id ${req.params.id} not found`);
  }
});

// Crear filtro por precio de producto

app.get("/products/nombre/:nombre", (req, res) => {
  const found = items.some((item) => item.nombre === req.params.nombre);
  if (found) {
    const filteredItem = items.filter(
      (item) => item.nombre === req.params.nombre
    );
    res.send(filteredItem);
  } else {
    res.status(404).send(`producto con nombre ${req.params.nombre} nombre`);
  }
});

//Crear filtro que muestre los productos con un precio entre 50 y 250.

app.get("/products/precio/", (req, res) => {
  const found = items.some((item) => item.precio >= 50 && item.precio <= 250);
  if (found) {
    const filteredItem = items.filter(
      (item) => item.precio >= 50 && item.precio <= 250
    );
    res.send(filteredItem);
  } else {
    res.status(404).send(`producto con precio ${req.params.precio} precio`);
  }
});

//Crear un filtro que cuando busque en postman por parámetro el id de un producto me devuelva ese producto

// app.get("/products/:id", (req, res) => {
//   const found = items.some((item) => item.id === +req.params.id);

//   if (found) {
//     const filteredItem = items.filter((item) => item.id === +req.params.id);
//     res.send(filteredItem);
//   } else {
//     res.status(404).send(`ERROR producto con ID ${req.params.id} `);
//   }
// });

//Crear un filtro que cuando busque en postman por parámetro el nombre de un producto me devuelva ese producto

app.get("/products/:nombre", (req, res) => {
  const found = items.some((item) => item.nombre === req.params.nombre);
  if (found) {
    const filteredItem = items.filter(
      (item) => item.nombre === req.params.nombre
    );
    res.send(filteredItem);
  } else {
    res.status(404).send(`producto con nombre ${req.params.nombre} nombre`);
  }
});

//
app.get("/products", (req, res) => {
  res.send({ description: "Productos", items });
});

app.listen(port, () => {
  console.log(`servidor levantado y funcionando en ${port}`);
});
