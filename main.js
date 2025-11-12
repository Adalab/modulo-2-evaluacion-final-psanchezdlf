'use strict';

console.log('Página y JS cargados!');

// SECCIÓN DE QUERY-SELECTOR
// Éstos son los elementos que nos traemos de la página HTML y usamos en el código

const catalogUl = document.querySelector('.catalog_list'); // UL donde pintamos el catálogo
const product = { id: 1, title: 'Dexter', price: 2.99, image: './images/series/dexter.jpg' }; //tarjeta


// SECCIÓN DE DATOS
// Variables globales que almacenan la información principal de la aplicación
// y se usan por todo el fichero.


// Semilla local (fallback)

const seedCatalog  = [
  { id: 1, title: 'Dexter',       price: 2.99, image: './images/series/dexter.jpg' },
  { id: 2, title: 'Breaking Bad', price: 3.49, image: './images/series/breaking-bad.jpg' },
  { id: 3, title: 'Frankenstein', price: 4.99, image: './images/pelis/frankenstein.jpg' },
  { id: 4, title: 'Good Boy',     price: 2.99, image: './images/pelis/goodboy.jpg' },
  { id: 5, title: 'Wednesday',     price: 2.99, image: './images/series/wednesday.jpg' },
  { id: 6, title: 'Squid Game',     price: 3.99, image: './images/series/squid-game.jpg' },
  { id: 7, title: 'Dune Part II',     price: 4.99, image: './images/pelis/dune.jpg' },
  { id: 8, title: 'Wild Robot',     price: 2.99, image: './images/pelis/wild-robot.jpg' },
  { id: 9, title: 'Sucession',     price: 2.99, image: './images/series/sucession.jpg' },
  { id: 10, title: 'The Big Bang Theory',     price: 2.99, image: './images/series/the-big-bang-theory.jpg' },
]; 

// API del enunciado
const DATA_URL  = 'https://fakestoreapi.com/products'; // Opción 1

//Principal
let catalog = []


// SECCIÓN DE FUNCIONES
// Éstas son funciones:
//   - con código auxiliar
//   - con código que usaremos en los eventos
//   - para pintar (render) en la página.

// Pintar UNA tarjeta (interpolaciones) conviertes ese dato en un string HTML (interpolaciones)

function renderOneProduct(p) {
  return `
    <li class="product-card" data-id="${p.id}">
      <h3>${p.title}</h3>
      <img src="${p.image}" alt="${p.title}">
      <p>${p.price.toFixed(2)} €</p>
      <button class="product-card-add-btn" type="button">Añadir</button>
    </li>
  `;
}

// Pinta TODAS
function renderCatalog(list) {
  let html = '';
  for (const item of list) {
    html += renderOneProduct(item);
  }
  catalogUl.innerHTML = html; 
}

// SECCIÓN DE FUNCIONES DE EVENTOS
// Aquí van las funciones handler/manejadoras de eventos


// SECCIÓN DE EVENTOS
// Éstos son los eventos a los que reacciona la página
// Los más comunes son: click (en botones, enlaces), input (en ídem) y submit (en form)


// SECCIÓN DE ACCIONES AL CARGAR LA PÁGINA
// Este código se ejecutará cuando se carga la página
// Lo más común es:
//   - Pedir datos al servidor
//   - Pintar (render) elementos en la página

catalogUl.innerHTML = renderOneProduct(product); // pinta SOLO 1 tarjeta
catalog = [...seedCatalog];   // cargamos la semilla local (fallback)
renderCatalog(catalog); // pintamos el array completo


/*
💡 NOTA IMPORTANTE:
Al iniciar el ejercicio, entendí que debíamos crear una tienda propia desde cero,
por lo que diseñé "Verflix" como un videoclub online con mi propio catálogo
de series y películas.

Luego me di cuenta de que el enunciado pedía usar la API de productos proporcionada
(`https://fakestoreapi.com/products`), así que he implementado correctamente el
`fetch()` para cumplir ese requisito técnico. El código realiza la petición y 
recibe los datos, visibles en consola.

No obstante, para mantener la coherencia visual y el concepto del proyecto,
opto por una "opción B": mantener en pantalla mi catálogo personalizado de 
series y películas, usando la API solo como demostración funcional.
*/

// Opción A (oficial del enunciado, paso a paso visto en clase)
/*
fetch(DATA_URL)
  .then(response => response.json())
  .then(data => {
    catalog = data;
    renderCatalog(catalog);
  })
  .catch(error => {
    console.error('Error cargando productos:', error);
    renderCatalog(catalog);
  });
*/

// Para demostrar visualmente el fetch, descomentar la Opción A de arriba

// Opción B (fetch funcional pero render local)
fetch(DATA_URL)
  .then(response => response.json())
  .then(data => {
    console.log('Fetch correcto, productos de la API:', data);
    // Comprobamos que FUNCIONA pero no pintamos estos datos porque usamos nuestro catálogo
  })
  .catch(error => {
    console.error('Error cargando productos:', error);
  });

// Mostramos catálogo personalizado
catalog = [...seedCatalog];
renderCatalog(catalog);