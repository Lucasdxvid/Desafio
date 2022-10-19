//todo =============== Main ===============

//! [1.0] Llamada de funciones

//? Imports

import Cards from "./cards.js"; // Utilizamos las declaraciones de import / export para traer o llamar las funciones de nuestros archivos JS
import Checker from "./checker.js";

//? VARS de autentificación y usuario

import {
  check1,
  check2,
  check3, // la mayoria de imports se utilizan a partir de la linea 175 aprox
  check4,
  check5,
  check6,
  registerForm,
  loginForm,
  containerUser,
  restartStorage,
  sectionContainer
} from "./user.js"

//? Storage

let cleanStorage
cleanStorage = document.getElementById("cleanStorage"); // Nos permitira limpiar el inicio de sesion

//! [1.1] Inicializacion de eventos

function startEvents() {
  window.addEventListener("DOMContentLoaded", () => { //* Este evento evitara ejecutar JS hasta que nuestro HTML cargue completamente
    const submitBtn = document.querySelector(".btn-search"); // Asignamos el boton search como el input que buscara el contenido que deseemos

    const cards = new Cards(); // Traemos a las cards creadas

    cards.getMoviesExample();

    submitBtn.addEventListener("click", (e) => { // Llamamos a las funciones que importamos anteriormente (al clickear se hara el submit de la palabra buscada en el search)
      e.preventDefault();

      const checker = new Checker();
      checker.verifyInput();
    });
  });


  cleanStorage.onclick = deleteStorage;
}

//! [1.2] Info de usuario 

function deleteStorage() { //* La misma nos permite eliminar TODO lo que almacenemos localmente
  Swal.fire({ //Aqui obligamos al usuario a confirmar su accion (en caso del que el mismo no quiera eliminar, puede cancelarlo)
    title: '¿Estas seguro?',
    text: "Tu cuenta sera eliminada y todo lo que hayas creado con ella",
    icon: 'warning',
    color: '#ffffff',
    background: 'linear-gradient(150deg, #19366b 20%, #148181 80%)',
    showCancelButton: true,
    confirmButtonColor: '#2d5ca3',
    cancelButtonColor: '#1b427c',
    confirmButtonText: 'Borrar',
    cancelButtonText: 'X'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        '¡Borrado!',
        'Tu cuenta y contenido fue borrado',
        'success'
      )

      localStorage.clear(); // Metodo que nos permitira eliminar nuestro save local

      if (check1 == true || check2 == true || check3 == true || check4 == true || check5 == true || check6 == true) { // si se cumple la condicion, reseteamos el registro / logeo
        registerForm.classList.remove("hiddeContent");
        loginForm.classList.add("hiddeContent");
        containerUser.classList.remove("hiddeContent");
        sectionContainer.classList.add("filter")
        restartStorage(); // llamamos la funcion exportada.
        
        window.location.reload(); // Recargamos la pagina de manera obligatoria
      }

      generateMoviesHTML(); // Actualizamos el resultado sin tener que recargar manualmente la pagina
    }
  })
}

//! [1.3] Punto de reunion (Funciones)

function main() { //En main traemos todas las funciones a utilizar
  startEvents()
}

//! [1.4] Llamada de la funcion principal

main()