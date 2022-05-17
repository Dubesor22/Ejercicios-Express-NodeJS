const URL = "http://localhost:3000/products/";
const main = document.querySelector("#main-container");

async function getItems(url) {
  try {
    const res = await axios.get(url);
    const items = res.data;
    console.log(items);
    showItems(items);
  } catch (e) {
    console.error(e);
  }
}

function showItems(items) {
  console.log(items.items);

  main.innerHTML = "";
  items.items.forEach((item) => {
    const { nombre, precio } = item; //deconstructing
    const eachItem = document.createElement("div");
    eachItem.classList.add("card");
    eachItem.innerHTML = `<div class="card-body">
    <div class="item-info">
      <h3 class="card-title">${nombre}</h3>
    </div>
    <div class="card-text">
      <h5>precio</h5>
      ${precio}
    </div>
  </div>`;
    main.appendChild(eachItem);
  });
}

// const showProducts = function (items) {
//   main.innerHTML = "";
//   items.forEach((item) => {
//     const { id, nombre, precio } = item;
//     console.log(id, nombre, precio);
//   });
// };
getItems(URL);
