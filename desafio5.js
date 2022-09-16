//================ GENERADOR DE CARDS  ================

// Parte 1: Constructor de PELICULAS

// 1.0 Creacion del constructor de "películas" // Molde de "películas" a crear

class Movies { // Estos son los datos que se tendran en cuenta a la hora de crear el array
    constructor(name, genre, rating) {
        this.name = name.toLowerCase();
        this.genre = genre;
        this.rating = rating;
    }
}

// 1.1 SWITCH para definir el "genero" de las películas a crear

const SELECT_GENRE = () => {
    let movGenre = parseInt(prompt("Elige el género de la película: \n 1. Terror \n 2. Romance \n 3. Suspenso \n 4. Comedia  \n 5. Acción \n 6. Ciencia Ficción \n 7. Musical \n 8. Fantasía \n 9. Drama \n 10. Aventuras \n 11. Otro"))
    switch (movGenre) { // En el mismo se le solicitara al usuario a traves de un prompt que coloque una opcion ligada a numeros del 1 al 11
        case 1:
            alert("Seleccionaste el género Terror")
            movGenre = "Terror"
            break;
        case 2:
            alert("Seleccionaste el género Romance")
            movGenre = "Romance"
            break;
        case 3:
            alert("Seleccionaste el género Suspenso")
            movGenre = "Suspenso"
            break;
        case 4:
            alert("Seleccionaste el género Comedia")
            movGenre = "Comedia" // El genero seleccionado sera luego utilizado cuando estemos creando una película
            break;
        case 5:
            alert("Seleccionaste el género Acción")
            movGenre = "Acción"
            break;
        case 6:
            alert("Seleccionaste el género Ciencia Ficción")
            movGenre = "Ciencia Ficción"
            break;
        case 7:
            alert("Seleccionaste el género Musical")
            movGenre = "Musical"
            break;
        case 8:
            alert("Seleccionaste el género Fantasía")
            movGenre = "Fantasía"
            break;
        case 9:
            alert("Seleccionaste el género Drama")
            movGenre = "Drama"
            break;
        case 10:
            alert("Seleccionaste el género Aventuras")
            movGenre = "Aventuras"
            break;
        case 11:
            alert("Seleccionaste el género Otro")
            movGenre = "Otro" // Tambien se crea el genero "Otro" si es que el que se busca no se encuentra listado
            break;
        default:
            if (SELECT_GENRE < 1 || SELECT_GENRE > 11 || SELECT_GENRE !== Number(SELECT_GENRE)) { //Si no se cumplen las demas condiciones se usara el "default"
                alert("El género elegido no se encuentra registrado en la lista")
                movGenre = SELECT_GENRE() // En el caso que no se elija ninguna de las opciones disponibles se volvera a llamar al SWITCH
            }

    }

    return movGenre // extraemos el valor que luego sera usado a la hora de crear una "película"
}

// 1.3 Generamos películas a partir del molde constructor anteriormente creado

function newMovies() {
    let movie = []; // Creamos las peliculas teniendo en cuenta el nombre / genero / valoracion
    let nroMovies = parseInt(prompt("¿Cuantas películas deseas agregar?"));

    while (nroMovies < 1 || nroMovies > 20 || nroMovies !== Number(nroMovies)) { // Añadimos condiciones a cumplir (minimo y maximo de peliculas a crear) y el uso OBLIGATORIO de "Number"
        alert("Necesitas añadir aunque sea 1 película \n (Maximo 20 películas)")
        nroMovies = parseInt(prompt("¿Cuantas películas deseas agregar?")); // Utilizamos el metodo parseInt 
    }

    for (let index = 0; index < nroMovies; index++) { // En este caso utilizamos un for el cual nos permitira crear películas acorde al numero / cantidad que solicitemos en el prompt "nroMovies"
        let name = prompt("Elige el nombre de la película nro: " + (index + 1)); // al index se le suma un 1 ya que el conteo empieza desde 0 (Esto es unicamente un cambio visual)
        while (name == "") {
            alert("El nombre debe conter por lo menos una letra o número");
            name = prompt("Elige el nombre de la película nro: " + (index + 1));
        }
        let genre = SELECT_GENRE(); //LLamamos la funcion que contiene el SWITCH que nos permitia elegir entre diferentes generos
        let rating = parseFloat(prompt("Califica esta película del 1-10"));

        while (rating < 1 || rating > 10 || rating !== Number(rating)) { // Ponemos condiciones a cumplir a la hora de elegir el rating / calificacion de la película como el uso de Number
            alert("La calificación no puede ser menor 1 ni mayor a 10")
            rating = parseFloat(prompt("Califica esta película del 1-10"))
        }

        let movieCreator = new Movies(name, genre, rating)
        movie.push(movieCreator) // Creamos pelicula teniendo en cuenta sus propiedades y la cantidad a crear para luego pushear
    }

    return movie
}

// ================================

// Parte 2: Interaccion con el HTML (DOM)

// 1.4 Creamos un ciclo de conteo el cual nos permitira interactuar con el HTML gracias a propiedades como "APPEND"

const movieGen = document.getElementById("movieContainer");

newMovies().forEach((newMovie) => { // Con la propiedad "innerHTML" podemos crear nuevas etiquetas / clases / VARIABLES DE JS / id y otros de manera dinamica 
    let mCard = document.createElement("div");
    mCard.className = "movieCard"; // con className accedemos a la clase creada en CSS la cual posee los atributos que modificara la card a crear
    mCard.innerHTML = ` 
            <h3 class="movieTitle">Película</h3>
            <p class="movieText">Nombre: <b class="movieTextBold">${newMovie.name}</b></p>
            <p class="movieText">Género: <b class="movieTextBold">${newMovie.genre}</b></p>
            <p class="movieText">Rating: <b class="movieTextBold">${newMovie.rating}</b></p>
        `;

    movieGen.append(mCard); // El APPEND nos permitira insertar nuevos elementos / nodos a uno existente similar a un PUSH

    console.log(newMovie) // Imprimimos el resultado
})

// ================================