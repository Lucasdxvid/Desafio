//TODO: ================ GENERADOR DE CARDS  ================

//! [1.0] Declaracion de variables

//? VARS Globales

let cleanStorage; // Nos permitira limpiar todos los nodos / arrays almacenados

//? VARS de información (Arrays - etc.)

let movieArray = []; // Aqui se almacenan las peliculas creadas

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
    restartStorage
} from "./user.js"

//? VARS de formulario de películas

let movieForm;
let inputId;
let inputName;
let inputGenre; // Al declarar las variables de manera global puedo hacer referencias de funciones en otras
let inputRating;
let inputImage;
let movieContainer;
let outpout; // Slider y Output son variables del input range
let slider;

//! [1.1] Constructor de películas (codigo)

class MovieBuilder { //* Clase constructora utilizada a la hora de crear películas
    constructor(id, name, genre, rating, image) {
        this.id = id;
        this.name = name.toLowerCase();
        this.genre = genre;
        this.rating = rating;
        this.image = image;
    }
}

//! [1.2] Inicializacion de elementos

function startElements() { //* inicializamos todos los elementos para utilizarse mas tarde enlanzando diferentes nodos

    //? FORM

    movieForm = document.getElementById("movieForm");
    inputId = document.getElementById("inputId");
    inputName = document.getElementById("inputName");
    inputGenre = document.getElementById("inputGenre");
    inputRating = document.getElementById("inputRating");
    inputImage = document.getElementById("inputImage");
    movieContainer = document.getElementById("movieContainer");
    outpout = document.getElementById("ratingValue");

    //? Storage

    cleanStorage = document.getElementById("cleanStorage");

    //? USER REGISTER / LOGIN (Proceso...) 
}

//! [1.3] Inicializacion de eventos

function startEvents() { //* inicializamos eventos a utilizar

    //? FORM

    movieForm.onsubmit = (event) => formValidation(event);
    cleanStorage.onclick = deleteStorage;

    slider = document.getElementById("inputRating").oninput = function () { // El evento "oninput" se ejecuta cuando un usuario escriba algo en un campo <input>
        outpout.innerHTML = this.value; // El valor generado en el input de tipo "rango" se vera reflejado visualmente en el span ya que la prop. InnerHTML nos permitira modificar el codigo del elemento HTML
    }
}

//! [1.4] Validacion del formulario (Condiciones a cumplir para poder generar las películas)

function formValidation(event) { //* creamos una funcion la cual nos sirve para validar nuestro formulario
    event.preventDefault();
    let movieId = inputId.value;
    let movieName = inputName.value; // de cada input necesitamos sacar su valor
    let movieGenre = inputGenre.value;
    let movieRating = parseFloat(inputRating.value);
    let movieImage = inputImage.value;

    const idExist = movieArray.some((movieCreated) => movieCreated.id === movieId);
    const nameExist = movieArray.some((movieCreated) => movieCreated.name === movieName);

    if (!idExist && !nameExist) { // si la ID no se repite estariamos cumpliendo con la condicion para poder crear la card
        let movieCreated = new MovieBuilder(movieId, movieName, movieGenre, movieRating, movieImage);

        movieArray.push(movieCreated); // pusheamos el array a crear utilizando la variable - array "movieArray" que creamos en la linea 3
        movieForm.reset(); // Al darle a SUBMIT el formulario no se limpia, con este METODO logramos que el mismo de RESETEE

        movieStorageUpdate();
        generateMoviesHTML(); // llamamos la funcion que creamos mas abajo la cual generara las cards en el HTML y tiene que ser llamada aqui debido a que se ejecutara CADA VEZ que creemos una card
        console.log(movieArray)
    } else {
        Swal.fire({
            icon: 'error',
            title: '¡ERROR!',
            text: 'La ID ya fue utilizada o el nombre de la película ya se encuentra en uso',
            footer: 'Intentalo nuevamente'
        }); // si no se cumple con la condicion nos devolvera un alert hasta que lo hagamos correctamente
    }
}

//! [1.5] Creacion de funcion necesaria para eliminar películas

// Hasta este punto ya pudimos crear el ARRAY pero no lo mostramos en NINGUN LADO de nuestro HTML, para eso debemos crear otra funcion

function removeMovie(movieId) { //* creamos la funcion que nos permitira borrar las cards
    let cardDelete = document.getElementById(`movieCard-${movieId}`);
    let indexDel = movieArray.findIndex( // retornamos la posicion del elemento
        (movieCreated) => Number(movieCreated.id) === Number(movieId) //la card a borrar debera cumplir estrictamente con la funcion para ser borrada
    );

    movieArray.splice(indexDel, 1); // removemos el elemento indicado en la array
    cardDelete.remove(); // removemos el nodo con el metodo REMOVE 
    movieStorageUpdate() // Llamamos a la funcion que almacena nuestras cards para mantenerla al lado de nuestro dom y array sobreescribiendo asi la card
}

//! [1.6] Creacion de películas con DOM (interaccion HTML)

function generateMoviesHTML() {
    movieContainer.innerHTML = ""; // Al crear una película y luego otra por default va a volver el producto anteriormente creado + el nuevo es por eso que el innerHTML reemplazara al mismo evitando crear 2 veces lo mismo que ademas es donde llamaremos a crear las cards en el HTML
    movieArray.forEach((movieCreated) => { // vamos a recibir una película
        let mCard = document.createElement("figure"); // usamos la propiedad createElement para crear una figure

        if (movieCreated.genre === "Terror") { // al crear obtendremos 2 clases, 1ra es global "movieCard" la cual da estilo a TODAS
            mCard.className = "movieCard horrorCard"
        } else if (movieCreated.genre === "Romance") { // la segunda clase es exclusiva de cada card de acuerdo a que valor en el select de "genero" 
            mCard.className = "movieCard romanceCard"
        } else if (movieCreated.genre === "Suspenso") {
            mCard.className = "movieCard suspenseCard"
        } else if (movieCreated.genre === "Comedia") { // Esta clase secundaria "exclusiva" nos serviran para crear filtros más adelante
            mCard.className = "movieCard comedyCard"
        } else if (movieCreated.genre === "Acción") {
            mCard.className = "movieCard actionCard"
        } else if (movieCreated.genre === "Ciencia Ficción") {
            mCard.className = "movieCard scienceFictionCard"
        } else if (movieCreated.genre === "Musical") {
            mCard.className = "movieCard musicalCard"
        } else if (movieCreated.genre === "Fantasía") {
            mCard.className = "movieCard fantasyCard"
        } else if (movieCreated.genre === "Aventuras") {
            mCard.className = "movieCard adventureCard"
        }

        mCard.id = `movieCard-${movieCreated.id}`; // tambien le asignaremos una ID la cual servira de referencia a la hora de ELIMINAR cards con otra funcion que recibira como nombre una ID ennumerada
        mCard.innerHTML = `
                <h3 class="movieTitle">Película</h3>
                <img src="${movieCreated.image}" alt="película" class="imgCard">
                <p class="movieText">ID: <b class="movieTextBold">${movieCreated.id}</b></p>
                <p class="movieText">Nombre: <b class="movieTextBold">${movieCreated.name}</b></p>
                <p class="movieText">Género: <b class="movieTextBold">${movieCreated.genre}</b></p>
                <p class="movieText">Rating: <b class="movieTextBold">${movieCreated.rating}</b></p>
            <div class="card-footer"> <button class="btn btn-danger" id="delButtom-${movieCreated.id}" >Eliminar</button></div>
             `; //definimos el cuerpo que tendra la card

        movieContainer.append(mCard); // El APPEND nos permitira insertar nuevos elementos / nodos a uno existente similar a un PUSH
        let delButtom = document.getElementById(`delButtom-${movieCreated.id}`); // Creamos la funcion que sirve para borrar cards dentro de OTRA y no por fuera ya que el mismo se crea dinamicamente al crearse el boton y antes no existe
        delButtom.onclick = () => removeMovie(movieCreated.id); //llamamos a una funcion creada arriba pasandole como parametro lo que queremos borrar
    });
}

//! [1.7] Almacenamiento de datos locales 

//? Movies Storage

function movieStorageUpdate() { //* Almacenamos / guardamos nuestra array de manera local (LocalStorage)
    let moviesJson = JSON.stringify(movieArray); // La pasamos a String
    localStorage.setItem("movies", moviesJson); // Almacenamos la misma
}

function getMoviesFromStorage() { //* revertimos la transformacion a string
    let moviesJson = localStorage.getItem("movies"); // seleccionamos la clave a usar

    if (moviesJson) { // Si el array almacenado no esta vacio lo "revertimos"
        movieArray = JSON.parse(moviesJson); // Usamos el metodo parse para revertir el mismo
        generateMoviesHTML(); // Llamamos de nuevo a la funcion que genera las peliculas dando como resultado que la misma se vuelva a "RECREAR" al ser almacenada
    }
}

//! [1.8] Limpieza de STORAGE

function deleteStorage() { //* La misma nos permite eliminar TODO lo que almacenemos localmente
    localStorage.clear(); // Metodo que nos permitira eliminar nuestro save local
    movieArray = [];

    if (check1 == true || check2 == true || check3 == true || check4 == true || check5 == true || check6 == true) { // si se cumple la condicion, reseteamos el registro / logeo
        registerForm.classList.remove("hiddeContent");
        loginForm.classList.add("hiddeContent");
        containerUser.classList.remove("hiddeContent");
        restartStorage(); // llamamos la funcion exportada
    }

    generateMoviesHTML(); // Actualizamos el resultado sin tener que recargar manualmente la pagina
}

//! [1.9] Punto de encuentro de las funciones

function main() { //* juntamos a la funciones que contienen los elementos y eventos
    startElements();
    startEvents();
    getMoviesFromStorage(); // Llamamos a la funcion que almacena sobrescribiendo a la que crea cards
}

//! [2.0] Llamada principal

main(); // Mandamos a llamar a la funcion principal