'use strict';

console.log('Página y JS cargados!');

// SECCIÓN DE QUERY-SELECTOR
// Éstos son los elementos que nos traemos de la página HTML y usamos en el código

const catalogUl = document.querySelector('.catalog_list'); // UL donde pintamos el catálogo
const product = { id: 1, title: 'Dexter', price: 2.99, image: './images/series/dexter.jpg' }; //tarjeta


// SECCIÓN DE DATOS
// Variables globales que almacenan la información principal de la aplicación
// y se usan por todo el fichero.

// Array de objetos (series/pelis)

let catalog = [
  { id: 1, title: 'Dexter',       price: 2.99, image: './images/series/dexter.jpg' },
  { id: 2, title: 'Breaking Bad', price: 3.49, image: './images/series/breaking-bad.jpg' },
  { id: 3, title: 'Frankenstein', price: 4.99, image: './images/pelis/frankenstein.jpg' },
  { id: 4, title: 'Good Boy',     price: 2.99, image: './images/pelis/goodboy.jpg' },
  { id: 5, title: 'Wednesday',     price: 2.99, image: './images/series/wednesday.jpg' },
  { id: 6, title: 'Squid Game',     price: 3.99, image: './images/series/squid-game.jpg' },
  { id: 7, title: 'Dune Part II',     price: 4.99, image: './images/pelis/dune.jpg' },
  { id: 8, title: 'Wild Robot',     price: 2.99, image: './images/pelis/wild-robot' },
  { id: 9, title: 'Sucession',     price: 2.99, image: './images/series/sucession' },
  { id: 10, title: 'The Big Bang Theory',     price: 2.99, image: './images/series/the-big-bang-theory' },
]; 


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
