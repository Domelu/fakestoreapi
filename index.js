

const URL= "https://fakestoreapi.com/products";
const favoritesBtn = document.querySelector('.favorites-btn');
const dropdown = document.querySelector('.dropdown');
const favoritesList = document.getElementById('favorites-list');
const contentItems = document.querySelectorAll('.content');

//let titulo = document.getElementById("titulo") 
//let precio = document.getElementById("precio") 
let productos = document.getElementById("productos")
let tabla = "<div class='card'>";
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

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

favoritesBtn.addEventListener('click', () => {
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});
contentItems.forEach(item => {
  const addToFavoritesBtn = item.querySelector('.add-to-favorites');
  addToFavoritesBtn.addEventListener('click', () => {
    const itemId = addToFavoritesBtn.dataset.itemId;
    addToFavorites(itemId);
  });
});

// Add item to favorites
function addToFavorites(itemId) {
  if (!favorites.includes(itemId)) {
    favorites.push(itemId);
    updateFavoritesList();
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
}

// Remove item from favorites
function removeFromFavorites(itemId) {
  const index = favorites.indexOf(itemId);
  if (index > -1) {
    favorites.splice(index, 1);
    updateFavoritesList();
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
}

// Update favorites list
function updateFavoritesList() {
  favoritesList.innerHTML = '';
  favorites.forEach(itemId => {
    const li = document.createElement('li');
    li.textContent = `Item ${itemId}`;
    li.addEventListener('click', () => {
      removeFromFavorites(itemId);
    });
    favoritesList.appendChild(li);
  });
}
      for(let i = 0; i < data.length; i++){
        let r = Math.floor( Math.random()*256)
        let g = Math.floor( Math.random()*256)
        let b = Math.floor( Math.random()*256)
        let precio = data[i].price 
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