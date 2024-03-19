

const URL= "https://fakestoreapi.com/products";


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

}
let listafav = []
function favorito(id){
  if (!listafav.includes(id)) {
    listafav.push(id);
    console.log("Lista fav:", listafav[listafav.length - 1]);
  }
  listafav.includes(2)
  listafav.push(id)

  for (let i =0; i< listafav.length; i++){
  console.log ("Lista fav:", listafav[i])
  }
  console.log(listafav)
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
    <button onclick="favorito(c)">❤️</button>
    <button onclick='otrafuncion()'> 0 </button>

    </div>
    
    `;
  tabla += bloquehtml;

    });
    tabla +="</div>";
    productos.innerHTML = tabla;
  }
  let listafavo = [
    {"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}},


];


  function otrafuncion(){
  mapearDatos(listafavo)
}
  getDATA();