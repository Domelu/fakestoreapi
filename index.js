

const URL= "https://fakestoreapi.com/products";
const imgUrl = `/images/producto1.jpg`;

//let titulo = document.getElementById("titulo") 
//let precio = document.getElementById("precio") 
let productos = document.getElementById("productos")
// let tabla = "<div class='card'>";
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    function getDATA (){
      fetch(URL)
      .then( response => response.json() )
      .then(data => {

  let productosCardset = JSON.stringify(data)
      localStorage.setItem('productos', productosCardset)
      mapearDatos(data);
      mapearDatos(data);
      
      
})
function displayFavorites() {
  const favoritosList = document.getElementById('favoritosList');
  favoritosList.innerHTML = ''; 
 
  const filteredProducts = JSON.parse(localStorage.getItem('productos')).filter(
    product => favorites.includes(product.id)
  );

  filteredProducts.forEach(product => {
    const favItem = document.createElement('li');

    const imgUrl = product.image;
   
    const imgElement = document.createElement('img');
    imgElement.src = imgUrl;
    imgElement.width = 50; 
    imgElement.height = 50;
    imgElement.alt = product.title;

    favItem.appendChild(imgElement);

    favoritosList.appendChild(favItem);

  });
}

}
let listafav = []
function favorito(id){

  listafav.includes(2)
  listafav.push(id)

  for (let i =0; i< listafav.length; i++){
  console.log ("Lista fav:", listafav[i])
  }
  console.log(listafav)
  }
  function favorito(id) {
    if (!listafav.includes(id)) {
      listafav.push(id);
      console.log("Lista fav:", listafav[listafav.length - 1]);
    }
  }
  
  function mapearDatos(data){
    let tabla = "<div class='card'>";
    data.forEach(item => {
      let r = Math.floor( Math.random()*256)
      let g = Math.floor( Math.random()*256)
      let b = Math.floor( Math.random()*256)
      let precio = item.price 
   let bloquehtml =
    `
    <div class= 'card-item'>
    <div class='cabecera'style="background:rgb(${r} ${g} ${b});"> </div>
    <div class= 'cont-img'>
    <img src= "${item.image}" />
    </div>
    
    <p class='titulo'>${item.title} </p>
    <p>$${precio} <span class ='precio-sd'> $${((precio * 0.1) + precio).toFixed(2)} </span> </p>
    <label class='categoria'> ${item.category} </label>
    <button onclick="favorito(${item.id})">❤️</button>
    <button onclick='otrafuncion()'> 0 </button>
    </div>

    `;
  tabla += bloquehtml;

    });
    tabla +="</div>";
    productos.innerHTML = tabla;
  }
  let listafavo=[{"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}},{"id":2,"title":"Mens Casual Premium Slim Fit T-Shirts ","price":22.3,"description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.","category":"men's clothing","image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg","rating":{"rate":4.1,"count":259}},{"id":3,"title":"Mens Cotton Jacket","price":55.99,"description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.","category":"men's clothing","image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg","rating":{"rate":4.7,"count":500}}]
function otrafuncion(){
  mapearDatos(listafavo)
}
  getDATA();