//todo =============== Request a la Api: "The Open Movie Database" ===============

//! [1.0] Imports

import Display from "./display.js";
import Checker from "./checker.js";

//! [1.1] Constructor de la API / Request 

export default class Request { //* Creamos un constructor que obtendra las imagenes / nombres de las peliculas a traves de la API
  constructor() {
    this.template = document.querySelector(".card-template").content;
  }

  async getInfo(inputValue) {
    try {
      const url = `http://www.omdbapi.com/?s=${inputValue}&apikey=17306729`;
      const response = await fetch(url);
      const json = await response.json();

      const container = document.querySelector(".new-row");

      const display = new Display(json.Search, this.template, container);
      display.displayUserCards();
    } catch (error) {
      const checker = new Checker();
      checker.getErrorContainer("Movie not found!");
    }
  }

  getMultipleInfo(moviesName) {
    const moviesInfo = [ // El mismo tendra 2 arrays.
      [], // 1: Almacenar las imagenes
      [] // 2: Almacenar los titulos
    ];

    // Traemos un Try / Catch para hacer una peticion con Async Await

    const result = moviesName.map((item) => {
      return new Promise(async (resolve) => {
        try { // Si todo sale como se esperaba mandaremos a llamar a la API "The Open Movie Database"
          const url = `http://www.omdbapi.com/?t=${item}&apikey=17306729`; // Aqui inserto mi key, con la ruta de la misma para obtener el titulo de la pelicula
          const response = await fetch(url);
          const json = await response.json(); // Aqui guardaremos la info de las peliculas

          moviesInfo[0].push(json.Poster); // Aqui traemos el poster (imagen)
          moviesInfo[1].push(json.Title); // Aqui traemos el titulo (texto) a traves de un push

          resolve();
        } catch (error) { //* En el hipotetico caso que ocurra un error obtendremos lo siguiente
          console.log(error);
        }
      });
    });

    Promise.all(result).then(() => { //* Una vez almacenada toda la informacion traeremos las películas de manera visual en el HTML
      const container = document.querySelectorAll(".default-row");
      const display = new Display(moviesInfo, this.template, container); // El constructor display (creado en otro JS), tomara la info que le pedimos a la API y la asignara a un elemento / nodo
      display.displayDefaultCards();
    });
  }
}