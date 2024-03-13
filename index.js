

const URL= "https://fakestoreapi.com/products";
//let titulo = document.getElementById("titulo") 
//let precio = document.getElementById("precio") 
let productos = document.getElementById("productos")
let tabla = "<div class='card'>";

function getDATA (){
    fetch(URL)
    .then( response => response.json() )
    .then(data => {
let productosCardset = JSON.stringify(data)
    localStorage.setItem('productos', productosCardset)
      console.log("productosCardset: ", productosCardset)
      
      let  productosCardget = localStorage.getItem('productos')
let listaproducto =JSON.parse(productosCardget)
console.log("listaproducto:", listaproducto)

      for(let i = 0; i < data.length; i++){
        let r = Math.floor( Math.random()*256)
        let g = Math.floor( Math.random()*256)
        let b = Math.floor( Math.random()*256)
        let precio =data[i].price 
     let bloquehtml =
      `
      <div class= 'card-item'>
      <div class='cabecera'style="background:rgb(${r} ${g} ${b});"> </div>
      <div class= 'cont-img'>
      <img src= "${data[i].image}" />
      </div>
      
      <p class='titulo'>${data[i].title} </p>
      <p>$${precio} <span class ='precio-sd'> $${((precio * 0.1) + precio).toFixed(2)} </span> </p>
      <label class='categoria'> ${data[i].category} </label>
     </div>
 
      `;
    tabla += bloquehtml;
  
      }
      
      tabla +="</div>";
      productos.innerHTML = tabla;
})


}

getDATA();