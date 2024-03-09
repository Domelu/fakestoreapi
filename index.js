

const URL= "https://fakestoreapi.com/products";
//let titulo = document.getElementById("titulo") 
//let precio = document.getElementById("precio") 
let productos = document.getElementById("productos")
let tabla = "<div class='card'>";

function getDATA (){
    fetch(URL)
    .then( response => response.json() )
    .then(data => {
      console.log("datos de la api: ",data) 
      for(let i = 0; i < data.length; i++){
     let bloquehtml =
      `
      <div class= 'card-item'>
      <div class='cabecera'></div>
      <img src= "${data[i].image}" />
      <p class="titulo">${data[i].title} </p>
      <p> ${data[i].price} </p>
      <label> ${data[i].category} </label>
     </div>
 
      `;
    tabla += bloquehtml;
  
      }
      
      tabla +="</div>";
      productos.innerHTML = tabla;
})


}

getDATA();