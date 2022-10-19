//todo =============== Creacion de Cards ===============


//! [1.0] Imports

import Request from "./request.js";

//! [1.0] Checkeo de datos ingresados

export default class Checker { //* Exportamos la clase checker la cual mandaremos a llamar en el js MAIN
  verifyInput() {
    const inputValue = document.querySelector(".my-input"); // Sera el input designado para recibir la info que tipeemos / escribamos

    if (inputValue.value === "") { //* Si el mismo esta vacio nos saldra una alerta, evitando asi la busqueda de un valor vacio
      this.getErrorContainer("Debes escribir por lo menos una letra");
    } else { //* Si el input posee aunque sea una letra / numero, mandaremos a llamar a la API a traves del "request"
      const request = new Request();
      request.getInfo(inputValue.value); // A partir del valor ingresado buscaremos la misma

      inputValue.value = ""; // El valor del input volvera a estar vacio una vez la busqueda sea exitosa
    }
  }

//? En caso de error...

  getErrorContainer(errorMsg) {//* Si surge un error mandaremos a crear una alerta visual la cual nos indicara el problema
    const fragment = new DocumentFragment();
    const errorContainer = document.querySelector(".error-container");
    const errorTemplate = document.querySelector(".error-template").content;

    const clone = errorTemplate.cloneNode(true);
    fragment.appendChild(clone);

    errorContainer.appendChild(fragment);

    document.querySelector(".alert-error").innerText = errorMsg;
    this.displayError(errorContainer);
  }

  displayError(errorContainer) {
    errorContainer.style.display = "block";

    setTimeout(() => {
      errorContainer.style.display = "none";

      while (errorContainer.firstChild) {
        errorContainer.firstChild.remove();
      }
    }, 1500); // El mismo tendra una duracion de 1.5 segundos antes de desaparecer
  }
}