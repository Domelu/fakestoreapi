console.log("holi");

const URL= "https://fakestoreapi.com/products";

function getDATA (){

    fetch(URL)
    .then( response => response.json() )
    .then(data => console.log("DATOS DE LAS API:",data) )
}
getDATA();