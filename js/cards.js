//todo =============== Creacion de Cards ===============

//! [1.0] Imports

//? Import del request / peticion a la API

import Request from "./request.js"; // Mandaremos a llamar a la api que nos traera la info del nombre + imagen de las peliculas en cuestion (Al buscar y las que tenemos por default)

//! [1.1] Creacion de cards por default

export default class Cards { //* En la misma crearemos un array de cards con su respectivo nombre + imagen, todo via api
  getImages(json) {
    const values = Object.values(json);
    const imgArray = [];

    while (imgArray.length <= 11) { // Mientras la longitud del array sea menor o igual a 11 llamamos a un metodo
      let item = this.newItem(values); // El mismo consiste en llamar películas locales de manera aleatoria

      imgArray.push(item); // Insertamos el titulo / elemento a traves del valor aleatorio obtenido
    }

    const request = new Request();
    request.getMultipleInfo(imgArray);
  }

  newItem(values) { //* Aqui creamos el metodo que nos devolvera un valor aleatorio
    const item = values[Math.floor(Math.random() * values.length)];
    return item;
  }

  //! [1.3] Llamada o peticion a la API

  async getMoviesExample() { //* Este json local traera ciertas películas por defecto (sin buscar nada) 

    //El mismo consiste en un array de 12 películas donde a traves de una peticion de la API mandaremos a traer a las mismas (con sus respectivas imagenes)

    const response = await fetch("/myMovies.json");
    const json = await response.json();

    this.getImages(json);
  }
}