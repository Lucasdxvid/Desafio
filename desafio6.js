//================ GENERADOR DE CARDS  ================

// 1.0 Declaracion de variables

let movieArray = [];

let movieForm;
let inputId;
let inputName;
let inputGenre; // Al declarar las variables de manera global puedo hacer referencias de funciones en otras
let inputRating;
let movieContainer;

let outpout // Slider y Output son variables del input range
let slider

// 1.1 Constructor de películas (codigo)

class MovieBuilder { // Clase constructora utilizada a la hora de crear películas
    constructor(id, name, genre, rating) {
        this.id = id;
        this.name = name.toLowerCase();
        this.genre = genre;
        this.rating = rating;
    }
}

// 1.2 Inicializacion de elementos

function startElements() { // inicializamos todos los elementos para utilizarse mas tarde enlanzando diferentes nodos
    movieForm = document.getElementById("movieForm");
    inputId = document.getElementById("inputId");
    inputName = document.getElementById("inputName");
    inputGenre = document.getElementById("inputGenre");
    inputRating = document.getElementById("inputRating")
    movieContainer = document.getElementById("movieContainer");
    outpout = document.getElementById("ratingValue");
}

// 1.3 Inicializacion de eventos

function startEvents() { // inicializamos eventos a utilizar
    movieForm.onsubmit = (event) => formValidation(event);

    slider = document.getElementById("inputRating").oninput = function () {
        outpout.innerHTML = this.value; // El valor generado en el input de tipo "rango" se vera reflejado visualmente en el span
    }
}

// 1.4 Validacion del formulario (Condiciones a cumplir para poder generar las películas)

function formValidation(event) { // creamos una funcion la cual nos sirve para validar nuestro formulario
    event.preventDefault();
    let movieId = inputId.value;
    let movieName = inputName.value; // de cada input necesitamos sacar su valor
    let movieGenre = inputGenre.value;
    let movieRating = parseFloat(inputRating.value);

    const idExist = movieArray.some((movieCreated) => movieCreated.id === movieId);

    if (!idExist) { // si la ID no se repite estariamos cumpliendo con la condicion para poder crear la card
        let movieCreated = new MovieBuilder(movieId, movieName, movieGenre, movieRating);

        movieArray.push(movieCreated); // pusheamos el array a crear utilizando la variable - array "movieArray" que creamos en la linea 3
        movieForm.reset(); // Al darle a SUBMIT el formulario no se limpia, con este METODO logramos que el mismo de RESETEE

        generateMoviesHTML(); // llamamos la funcion que creamos mas abajo la cual generara las cards en el HTML y tiene que ser llamada aqui debido a que se ejecutara CADA VEZ que creemos una card
        console.log(movieArray)
    } else {
        Swal.fire({
            icon: 'error',
            title: '¡ERROR!',
            text: 'La ID ya fue utilizda',
            footer: 'Intentalo nuevamente'
          }); // si no se cumple con la condicion nos devolvera un alert hasta que lo hagamos correctamente
    }
}

// 1.5 Creacion de funcion necesaria para eliminar películas

// Hasta este punto ya pudimos crear el ARRAY pero no lo mostramos en NINGUN LADO de nuestro HTML, para eso debemos crear otra funcion

function removeMovie(movieId) { // creamos la funcion que nos permitira borrar las cards
    let cardDelete = document.getElementById(`movieCard-${movieId}`);
    let indexDel = movieArray.findIndex( // retornamos la posicion del elemento
        (movieCreated) => Number(movieCreated.id) === Number(movieId) //la card a borrar debera cumplir estrictamente con la funcion para ser borrada
    );

    movieArray.splice(indexDel, 1); // removemos el elemento indicado en la array
    cardDelete.remove(); // removemos el nodo con el metodo REMOVE
}

// 1.6 Creacion de películas con DOM (interaccion HTML)

function generateMoviesHTML() {
    movieContainer.innerHTML = ""; // Al crear una película y luego otra por default va a volver el producto anteriormente creado + el nuevo es por eso que el innerHTML reemplazara al mismo evitando crear 2 veces lo mismo que ademas es donde llamaremos a crear las cards en el HTML
    movieArray.forEach((movieCreated) => { // vamos a recibir una película
        let mCard = document.createElement("div"); // usamos la propiedad createElement para crear un div
        mCard.className = "movieCard"; // el mismo va a poseer la clase movieCard la cual ya esta definida en CSS
        mCard.id = `movieCard-${movieCreated.id}`; // tambien le asignaremos una ID la cual servira de referencia a la hora de ELIMINAR cards con otra funcion que recibira como nombre una ID ennumerada
        mCard.innerHTML = `
                <h3 class="movieTitle">Película</h3>
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

// 1.7 Punto de encuentro de las funciones

function main() { // juntamos a la funciones que contienen los elementos y eventos
    startElements();
    startEvents();
}

// 1.8 Llamada principal

main(); // Mandamos a llamar a la funcion principal