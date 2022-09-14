// PARTE 1: Constructor unico de Usuario

// 1.1 Comenzamos creando la clase constructora de usuario + contraseña 

class Users {
    constructor(user, pass) {
        this.user = user.toLowerCase(); // El "lowerCase" convertira los datos recibidos a minusculas por lo cual no es "key sensitive"
        this.pass = pass.toLowerCase();
    }
}

// 1.2 Empezamos a crear el nombre y contraseña a partir del molde constructor "Users"

function newUser() {
    let userInfo = [] // Este sera el objeto a crear
    userWelcome = alert("Bienvenido! Antes de empezar necesitamos que cree su cuenta")

    let username = prompt("Cual es el nombre de la nueva cuenta")
    while (username == "" || username.length <= 3) { // Usamos el metodo "lenght" dando asi como requisito un numero minimo de strings a utilizar
        alert("El nombre debe contener por lo menos 4 letras o números")
        username = prompt("Debe crear un nombre de usuario que cumpla con los requisitos" + "\n" + "\n Recuerda que debe poseer por lo 4 o más letras/números")
    }
    let password = prompt("Cual es la nueva contraseña de la cuenta")
    while (password == "" || password.length <= 4) { // Aqui hacemos lo mismo pero pidiendo mas letras como requisitos
        alert("La contraseña debe poseer al menos 5 letras o números")
        password = prompt("Debe crear una contraseña que cumpla con los requisitos" + "\n" + "\n Recuerda que debe poseer por lo 5 o más letras/números")
    }

    let userGenerator = new Users(username, password) //Generamos el nuevo "User" solicitando un username y password a partir de prompts
    userInfo.push(userGenerator)
    return userInfo
}

// PARTE 2: Verificacion de usuario

// 2.1 Verificacion de nombre de cuenta

function confirmUser(username) {
    let ask = prompt("Ingrese su nombre de usuario") // A partir de la funcion "confirmUser" solicitamos colocar un usuario existente
    let userExist = username.some((elemento) => elemento.user == ask) // En este caso utilizamos el metodo "SOME" el cual buscara los elementos dentro de la array
    if (userExist == true) { // A partir del uso del metodo "SOME" obtendremos un valor booleano "true" o "false", si es verdadero podremos avanzas
        alert("El nombre de usuario es correcto")
    }
    while (userExist == false) { // Si el valor booleano es falso, entraremos en un bucle hasta colocar un usuario existente
        alert("El nombre usuario ingresado es incorrecto")
        ask = prompt("Ingrese un nombre de cuenta valida")
        userExist = username.some((elemento) => elemento.user == ask)
    }
    console.log("El nombre de usuario tiene un valor:", userExist)
    return userExist
}

// 2.2 Verificacion de contraseña

function confirmPass(password) { // Aqui hacemos exactamente lo mismo que en la "verificacion de nombre de cuenta"
    let ask = prompt("Ingrese su contraseña")
    let passExist = password.some((elemento) => elemento.pass == ask)
    if (passExist == true) {
        alert("La contraseña ingresada es correcta")
    }
    while (passExist == false) {
        alert("La contraseña ingresada es incorrecta")
        ask = prompt("Ingrese una contraseña valida")
        passExist = password.some((elemento) => elemento.pass == ask)
    }
    console.log("La contraseña tiene un valor:", passExist)
    return passExist
}

//=================================

// Parte 3: Creacion del "MENU" interactivo

// 3.1 Creacion del constructor de "películas" // Molde de "películas" a crear

class Movies { // Esta parte es similar a la creacion del "User"
    constructor(name, genre, rating) {
        this.name = name.toLowerCase();
        this.genre = genre;
        this.rating = rating;
    }
}

// 3.2 SWITCH para definir el "genero" de las películas a crear

const SELECT_GENRE = () => {
    let movGenre = parseInt(prompt("Elige el género de la película: \n 0. Terror \n 1. Romance \n 2. Suspenso \n 3. Comedia  \n 4. Acción \n 5. Ciencia Ficción \n 6. Musical \n 7. Fantasía \n 8. Drama \n 9. Aventuras \n 10. Otro"))
    switch (movGenre) { // En el mismo se le solicitara al usuario a traves de un prompt que coloque una opcion ligada a numeros del 0 al 10
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
            movGenre = "Comedia" // El genero seleccionado sera luego utilizado cuando estemos creando una película
            break;
        case 4:
            alert("Seleccionaste el género Acción")
            movGenre = "Acción"
            break;
        case 5:
            alert("Seleccionaste el género Ciencia Ficción")
            movGenre = "Ciencia Ficción"
            break;
        case 6:
            alert("Seleccionaste el género Musical")
            movGenre = "Musical"
            break;
        case 7:
            alert("Seleccionaste el género Fantasía")
            movGenre = "Fantasía"
            break;
        case 8:
            alert("Seleccionaste el género Drama")
            movGenre = "Drama"
            break;
        case 9:
            alert("Seleccionaste el género Aventuras")
            movGenre = "Aventuras"
            break;
        case 10:
            alert("Seleccionaste el género Otro")
            movGenre = "Otro" // Tambien se crea el genero "Otro" si es que el que se busca no se encuentra listado
            break;
        default:
            if (SELECT_GENRE < 0 || SELECT_GENRE > 11 || SELECT_GENRE !== Number(SELECT_GENRE)) { //Si no se cumplen las demas condiciones se usara el "default"
                alert("El género elegido no se encuentra registrado en la lista")
                movGenre = SELECT_GENRE() // En el caso que no se elija ninguna de las opciones disponibles se volvera a llamar al SWITCH
            }

    }

    return movGenre // extraemos el valor que luego sera usado a la hora de crear una "película"
}

// 3.3 Uso del objeto nativo de JS "MATH"

const RANDOM_GENRE = () => { // A partir de esta funcion obtenedremos un genero los cuales pueden ser cualquiera que se encuentre dentro de la array "RANDOM_GENRE"   
    const genreOptions = ["Terror", "Romance", "Suspenso", "Comedia", "Acción", "Ciencia Ficción", "Musical", "Fantasía", "Drama", "Aventuras"];

    const random = Math.floor(Math.random() * genreOptions.length); //A partir de math.floor/random + el array.lenght obtendremos un resultado random
    alert("Deberías ver una película de: " + genreOptions[random])
    console.log(random, genreOptions[random]);
}

// 3.3 Generamos películas a partir del molde constructor anteriormente creado

function newMovies() {
    let movie = []; // Creamos las peliculas teniendo en cuenta el nombre / genero / valoracion
    let nroMovies = parseInt(prompt("¿Cuantas películas deseas agregar?"));

    while (nroMovies < 1 || nroMovies > 20 || nroMovies !== Number(nroMovies)) { // Añadimos condiciones a cumplir (minimo y maximo de peliculas a crear) y el uso OBLIGATORIO de "Number"
        alert("Necesitas añadir aunque sea 1 película \n (Maximo 20 películas)")
        nroMovies = parseInt(prompt("¿Cuantas películas deseas agregar?")); // Utilizamos el metodo parseInt 
    }

    for (let index = 0; index < nroMovies; index++) { // En este caso utilizamos un for el cual nos permitira crear películas acorde al numero / cantidad que solicitemos en el prompt "nroMovies"
        let name = prompt("Elige el nombre de la película nro: " + index);
        while (name == "") {
            alert("El nombre debe conter por lo menos una letra o número");
            name = prompt("Elige el nombre de la película nro: " + index);
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

// 3.4 Obtencion de fecha actual

function actualTime() { // Al menu se le añade otra opcion la cual nos dara una fecha exacta a partir del uso de la clase "date"
    const actualDate = new Date() // Luego creamos la constante "finalActualDate" donde obtendremos la fecha transformada a MM/DD/YYYY
    const finalActualDate = ((actualDate.getMonth() > 8) ? (actualDate.getMonth() + 1) : ('0' + (actualDate.getMonth() + 1))) + '/' + ((actualDate.getDate() > 9) ? actualDate.getDate() : ('0' + actualDate.getDate())) + '/' + actualDate.getFullYear()
    alert("Hoy es: " + finalActualDate)
    console.log("Hoy es: ", finalActualDate) // Imprimimos y tambien damos un alert para que el usuario pueda apreciar el resultado
}

// 3.4 Creacion del "MENU PRINCIPAL"

const MENU = () => { // El mismo basicamente consiste en un SWITCH el cual permitira llamar casi todas las funciones anteriormentes vistas en el orden que se desee
    let menuSelect = parseInt(prompt("¿Que quieres hacer? \n 0. Añadir películas \n 1. Sorprendeme \n 2. Revisar la fecha \n 3. Salir (Cerrar menu)"))

    switch (menuSelect) {
        case 0:
            alert("Seleccionaste la opcion: AÑADIR PELICULAS")
            let movie = newMovies()
            console.log(movie)
            MENU() // Al cumplir con su objetivo, volveremos al MENU PRINCIPAL
            break
        case 1:
            alert("Seleccionaste la opcion: SORPRENDEME")
            alert("¿No sabes que tipo de película podrias ver el dia hoy? \n Dejanos elegir por tí")
            RANDOM_GENRE()
            MENU()
            break
        case 2:
            alert("Seleccionaste la opcion: VER FECHA ACTUAL")
            actualTime()
            MENU()
            break
        case 3:
            alert("Seleccionaste la opcion: CERRAR MENU") // En caso que el usuario desee cerrar el MENU y dejar de interactuar con la pagina, puede utilizar la opcion "CERRAR MENU"
            break

        default:
            if (MENU < 0 || MENU > 3 || MENU !== Number(MENU)) {
                alert("¡No seleccionaste ninguna de las opciones disponibles!")
                MENU() // Como en otros caso si no se cumple ninguna condicion se nos devolvera al menu inicio
            }
            break
    }
}

// PARTE 4: PUNTO DE REUNION para llamar a las funciones


// 4.1 Creacion de la funcion MAIN

function main() { // A partir de la funcion MAIN, mandaremos a llamar a TODAS las funciones que fueron creadas anteriormente
    let user = newUser()
    console.log(user)
    let userExist = confirmUser(user)
    let passExist = confirmPass(user) // Hasta aquí irian todos los pasos de registracion y logeo de usuario
    MENU() // Aqui se llama al MENU interactivo
}

//4.2 Llamado de la funcion principal

main() // Por ultimo solo nos queda llamar a la funcion PRINCIPAL que a su vez llama a otras funciones