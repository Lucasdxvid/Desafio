// Paso 1: Creacion del constructor de "películas"

class Movies {
    constructor(name, genre, rating) {
        this.name = name.toLowerCase();
        this.genre = genre;
        this.rating = rating;
    }
}

// Paso 2: Creamos un switch el cual sera llamado a la hora de utilizar el "molde" para crear peliculas

const SELECT_GENRE = () => {
    let movGenre = parseInt(prompt("Elige el género de la película: \n 0. Terror \n 1. Romance \n 2. Suspenso \n 3. Comedia  \n 4. Acción \n 5. Otro"))
    switch (movGenre) {
        case 0:
            alert("Seleccionaste el género Terror")
            movGenre = "Terror"
            break;
        case 1:
            alert("Seleccionaste el género Romance")
            movGenre = "Romance"
            break;
        case 2:
            alert("Seleccionaste el género Suspenso")
            movGenre = "Suspenso"
            break;
        case 3:
            alert("Seleccionaste el género Comedia")
            movGenre = "Comedia"
            break;
        case 4:
            alert("Seleccionaste el género Acción")
            movGenre = "Acción"
            break;
        case 5:
            alert("Seleccionaste el género Otro")
            movGenre = "Otro"
            break;
        default:
            if (SELECT_GENRE < 0 || SELECT_GENRE > 5 || SELECT_GENRE !== Number(SELECT_GENRE)) {
                alert("El género elegido no se encuentra registrado en la lista")
                movGenre = SELECT_GENRE()
            }

    }

    return movGenre
}

// Paso 3: Creamos las peliculas teniendo en cuenta el nombre / genero / valoracion

function newMovies() {
    let movie = [];
    let nroMovies = parseInt(prompt("¿Cuantas películas deseas agregar?"));

    while (nroMovies < 1 || nroMovies > 20 || nroMovies !== Number(nroMovies)) {
        alert("Necesitas añadir aunque sea 1 película \n (Maximo 20 películas)")
        nroMovies = parseInt(prompt("¿Cuantas películas deseas agregar?"));
    }

    for (let index = 0; index < nroMovies; index++) {
        let name = prompt("¿Cual es el nombre de la película?");
        while (name == "") {
            alert("El nombre debe conter por lo menos una letra o número");
            name = prompt("¿Cual es el nombre de la película?");
        }
        let genre = SELECT_GENRE();
        let rating = parseFloat(prompt("Califica esta película del 1-10"));

        while (rating < 1 || rating > 10 || rating !== Number(rating)) {
            alert("La calificación no puede ser menor 1 ni mayor a 10")
            rating = parseFloat(prompt("Califica esta película del 1-10"))
        }

        let movieCreator = new Movies(name, genre, rating)
        movie.push(movieCreator)
    }

    return movie
}

// Paso 4: Llamamos a la funcion main la cual engloba a las otras

function main() {
    let movie = newMovies()
    console.log(movie)
}

main()