

const URL= "https://fakestoreapi.com/products";
let titulo = document.getElementById("titulo") 
let precio = document.getElementById("precio") 
console.log() 


function getDATA (){
    fetch(URL)
    .then( response => response.json() )
    .then(data => {
      console.log("datos de la api= ",data) 
      for(let i = 0; i < data.length; i++){
    console.log(data[i].title)
  
      }
      titulo.innerHTML= data[1].title;
      titulo.innerHTML= data[2].price; 
})
//titulo.innerHTML= "nuevo texto";


}

getDATA();