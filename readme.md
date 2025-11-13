# 🎬 Verflix

**Verflix** es una tienda online de alquiler de series y películas inspirada en Netflix, desarrollada como ejercicio de evaluación de JavaScript.  
Permite buscar series/películas, añadirlas a una lista de favoritos/carrito y guardarlas para verlas más tarde.

- 🔍 Campo de búsqueda para filtrar por nombre o palabra clave.
- ❤️ Sistema de favoritos: añade o elimina con un solo click.
- 💾 Persistencia mediante `localStorage`.
- 🌓 Interfaz responsive y minimalista.

## 💡 NOTA IMPORTANTE:

Al iniciar el ejercicio, entendí que debíamos crear una tienda propia desde cero, por lo que diseñé "Verflix" como un videoclub online con su propio catálogo de series y películas.

Luego me di cuenta de que el enunciado pedía usar la API de productos proporcionada (`https://fakestoreapi.com/products`), así que he implementado correctamente el `fetch()` para cumplir ese requisito técnico. El código realiza la petición y recibe los datos, visibles en consola.

No obstante, para mantener la coherencia visual y el concepto del proyecto, opto por una "opción B": mantener en pantalla mi catálogo personalizado de series y películas, usando la API solo como demostración funcional.

Todo esto queda reflejado en el código.

## 🧠 Objetivo del ejercicio

- Practicar la estructura de código modular en JavaScript:
  - Sección de **query-selectors**
  - Sección de **datos**
  - Sección de **funciones**
  - Sección de **eventos**
  - Sección de **acciones al cargar la página**
- Utilizar **fetch (GET)** para obtener datos de una API externa.
- Renderizar listas de objetos usando **interpolaciones**.
- Implementar un **filtro en vivo** por texto.
- Añadir y eliminar elementos de una lista (favoritos o “carrito”).
- Guardar la información en **localStorage** para persistir los datos.
- Crear una interfaz responsive.

## 🧩 Tecnologías utilizadas

- **HTML5**
- **CSS3 (Flex y Grid responsive)**
- **JavaScript**
  - `fetch()` para la petición de datos
  - `addEventListener()` y **delegación de eventos**
  - `localStorage` para persistencia
  - Funciones de render dinámico con **template literals**
- Logo creado con **Canva** y ayuda de **ChatGPT** + **DALL·E**

## 🙌 Créditos

Proyecto desarrollado por Patricia Sánchez.
**Bootcamp Diseño y Desarrollo Web - Adalab / 2025**

## 🚀 Cómo arrancar el proyecto

Clona este repositorio con git en **Visual Studio Code**:

git clone https://github.com/Adalab/modulo-2-evaluacion-final-psanchezdlf

O accede a través del siguiente enlace: https://beta.adalab.es/modulo-2-evaluacion-final-psanchezdlf/
