const URL= "https://fakestoreapi.com/products"; 
let productos = document.getElementById("productos");
let favoritosMenu = document.getElementById("favoritos-menu"); 
let listafav = JSON.parse(localStorage.getItem('favorites')) || [];

function getDATA (){
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        let productosCardset = JSON.stringify(data);
        localStorage.setItem('productos', productosCardset);
        mapearDatos(data);
    });
}

function mostrarMensaje(mensaje) {
  document.querySelector('.message-text').textContent = mensaje;
  document.querySelector('.message-box').style.display = 'block';
  setTimeout(ocultarMensaje, 3000);
}

function ocultarMensaje() {
  document.querySelector('.message-box').style.display = 'none';
}

function favorito(id) {
  let index = listafav.indexOf(id);
  let boton = document.querySelector(`[data-id="${id}"]`);

  if (index !== -1) {
    listafav.splice(index, 1);
    localStorage.setItem('favorites', JSON.stringify(listafav));
    console.log("Eliminado de favoritos:", id);
    actualizarFavoritosMenu();
    boton.innerHTML = '❤️'; // Cambiar a corazón rojo
    mostrarMensaje("Producto eliminado de favoritos");
  } else {
    listafav.push(id);
    localStorage.setItem('favorites', JSON.stringify(listafav));
    console.log("Agregado a favoritos:", id);
    actualizarFavoritosMenu();
    boton.innerHTML = '🤍'; // Cambiar a corazón blanco
    mostrarMensaje("Producto agregado a favoritos");   
  }
}



function mapearDatos(data) {
  let tabla = "<div class='card'>";
  data.forEach(item => {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      let precio = item.price;
      let favIcon = listafav.includes(item.id) ? '🤍' : '❤️'; // Corazón blanco si está en favoritos, corazón rojo si no

      let bloquehtml = `
            <div class='card-item'>
                <div class='cabecera' style="background:rgb(${r}, ${g}, ${b});"></div>
                <div class='cont-img'>
                    <img src="${item.image}" />
                </div>
                <p class='titulo'>${item.title} </p>
                <p>$${precio} <span class='precio-sd'>$${((precio * 0.1) + precio).toFixed(2)}</span></p>
                <label class='categoria'> ${item.category} </label>
                <button onclick="favorito(${item.id})" data-id="${item.id}" class="button-background">
                  <span>${favIcon}</span>
                </button>
            </div>
        `;
      tabla += bloquehtml;
  });
  tabla += "</div>";
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
     
  }
  let open = document.getElementById("menu-open")
  open.addEventListener('click',function (){
    document.getElementById("body").classList.add("bloquear")
  })

  let close = document.getElementById("menu-close")
  close.addEventListener('click',function (){
    document.getElementById("body").classList.remove("bloquear")
  })
  
  getDATA(); 
  actualizarFavoritosMenu();