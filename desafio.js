// Paso 0: Inicio

const REQUEST_1 = alert("¡Bienvenido a eMOVIES! El mejor foro de películas \n Ingresa tus datos para poder acceder a esta gran comunidad")

// Paso 1: Usuario

do {
    user = prompt("Ingresa un nombre")
    if (user != "lucasdxvid") {
        alert("Nickname Incorrecto")
    }
} while (user != "lucasdxvid") {
    alert("El nickname: " + user + " es correcto")
}

// Paso 2: Contraseña

do {
    password = prompt("Ingresa tu contraseña")
    if (password != "generico44") {
        alert("La contraseña ingresada es incorrecta, vuelve a intentarlo")
    }
} while (password != "generico44") {
    alert("Todos los datos ingresados son correctos" + "\n ¡Bienvenido " + user + "!")
}

// Paso 3: Verificacion de edad

const REQUEST_2 = alert("¡Ya casi terminamos! Solo hace falta ingresar tu edad y un pasito más... \n (Recuerda que necesitas tener al menos 16 años para ingresar)")
let age = parseInt(prompt("Ingresa un tu edad (Minimo 16 años)"))

while (age < 16) {
    alert("Lo sentimos, no posees los requisitos para continuar ;(");
    age = parseInt(prompt("Intentalo nuevamente"))
    console.log(typeof age)
}

// Paso 4: Comprobacion bot

const REQUEST_3 = alert("Ahora solo necesitamos comprobar que no eres un robot \nA continuación vas a ver un contador de elefantes del 2 al 10 y deberas decifrar una cosa \n ¿Cual es el número faltante entre 2-10?")

for (let i = 2; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    alert(i + " elefantes");
    console.log(i + " elefantes")
}

let elephant = parseInt(prompt("Ingresa el número faltante entre 2-10"))

while (elephant != 5) {
    alert("¡Incorrecto! Vuelve a intentarlo...");
    elephant = prompt("RECUERDA: Entre 1-10")
}

const REQUEST_4 = alert("¡Bien hecho! Todos los pasos fueron completados, ya puedes ingresar a eMovies")

// Paso 5: Resultado

console.log("Usuario: " + user + "\nContraseña: " + password + "\nEdad: " + age)