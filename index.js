

const URL= "https://fakestoreapi.com/products";
//let titulo = document.getElementById("titulo") 
//let precio = document.getElementById("precio") 
let productos = document.getElementById("productos")
// let tabla = "<div class='card'>";
let favoritosMenu = document.getElementById("favoritos-menu"); // Agregar esta línea
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

}
let listafav = []
function favorito(id){

  listafav.includes(2)
  listafav.push(id)

  for (let i =0; i< listafav.length; i++){
  console.log ("Lista fav:", listafav[i])
  }
console.log(listafav)  }


  function favorito(id) {
    let index = listafav.indexOf(id);
  if (index !== -1) {
 
    listafav.splice(index, 1);
    localStorage.setItem('favorites', JSON.stringify(listafav));
    console.log("Eliminado de favoritos:", id);
    actualizarFavoritosMenu();
  } else {
  
      listafav.push(id);
      localStorage.setItem('favorites', JSON.stringify(listafav));
      console.log("Agregado a favoritos:", id);
      actualizarFavoritosMenu();
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
  function actualizarFavoritosMenu() {  // Actualiza el contenido del contenedor de productos favoritos en el menú lateral 
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let favoritosHTML = ''; //Inicializa una cadena vacía para almacenar los productos favoritos
    favorites.forEach(favoriteId => {
    //Busca el producto correspondiente en la lista de productos utilizando su ID
      let product = JSON.parse(localStorage.getItem('productos')).find(item => item.id === favoriteId);    // Verifica si el producto existe en la lista de productos
    if (product) {    // Si el producto existe, agrega su información al HTML de los productos favoritos
        favoritosHTML += `
          <div class='favorito-item'>
            <img src='${product.image}' />
            <p>${product.title}</p>
          </div>
        `;
      }
    });
    favoritosMenu.innerHTML = favoritosHTML;
     // Actualiza el contenido del contenedor de productos favoritos en el menú lateral
  }

  let data = [
    {"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}},


];


  function otrafuncion(){
  mapearDatos(data)
}
  getDATA(); 
  actualizarFavoritosMenu();//actualizar la dinamica de la lista