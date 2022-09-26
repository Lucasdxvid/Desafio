//TODO: ================ INICIO DE SESION ================

//! [1.0] Declaracion

//? Registro

const registerForm = document.getElementById("formRegister");
const user = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const mainSection = document.getElementById("mainSection");
const containerUser = document.getElementById("containerUser");

let check1 = false; //Los checks vendran por defecto con un valor booleano "falso"
let check2 = false;
let check3 = false;
let check4 = false;

//? Logeo

const loginForm = document.getElementById("formLogin");
const validUsername = document.getElementById("validUsername");
const validPassword = document.getElementById("validPassword");

let check5 = false;
let check6 = false;

//! [1.1] Registro de cuenta

function checkInputs() {

    const userValue = user.value.trim(); // El metodo Trim remueve los espacios en blanco
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (userValue === "" || userValue.length <= 3) { //Creamos validaciones a la hora de tomar datos
        setErrorFor(user, "Necesitas ingresar por lo menos 4 letras");
    } else {
        setSuccessFor(user);
        check1 = true;
    }

    if (emailValue === "") {
        setErrorFor(email, "No puedes dejar el email en blanco");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Necesitas ingresar un email válido");
    } else {
        setSuccessFor(email);
        check2 = true; // En el caso de que se cumpla la validacion, el check se convierte a "true"
    }

    if (passwordValue === "" || passwordValue.length <= 4) {
        setErrorFor(password, "La contraseña necesita tener por lo menos 5 letras"); //
    } else {
        setSuccessFor(password); // Cuando un input cumple una condicion u otra recibira la funcion setError o setSuccess
        check3 = true;
    }

    if (password2Value === "") { // La contraseña posee una segunda verificacion
        setErrorFor(password2, "No puedes dejar espacios en blanco");
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, "La contraseña no coincide");
    } else {
        setSuccessFor(password2);
        check4 = true;
    }
}

function setErrorFor(input, message) { //* Esta funcion nos permitira adherir un mensaje en rojo debajo del input y un icono advirtiendo que hicimos algo mal
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error"; // a los inputs se añaden clases que modificaran visualmente al mismo
    small.innerText = message; // Usamos innertext para acceder al texto visual
}

function setSuccessFor(input) { //* Esta funcion hace lo mismo que la otra pero a lo contrario, nos advertira con color verde que el valor agregado al input es correcto
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}

function isEmail(email) { //* Usamos expresiones regulares para crear la validacion de mail
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function validRegisterForm() { //* Creamos una validacion de formulario
    if (check1 == true && check2 == true && check3 == true && check4 == true) { // Al cumplir con las condiciones (los checks en true) podremos avanzar
        Swal.fire({ // Se nos disparara un mensaje avisandonos que la cuenta fue creada
            icon: 'success',
            title: '¡La cuenta ' + user.value + ' fue creada con exito!',
            showConfirmButton: false,
            timer: 1500
        })
        registerForm.classList.add("hiddeContent"); // Pasamos a ocultar el formulario de "REGISTRO" y visibilizamos el formulario de "LOGEO"
        loginForm.classList.remove("hiddeContent");
    }
}

//! [1.2] Logeo de cuenta

function checkLoginInput() { //* Esta funcion es el siguiente paso, el cual es similar a la de registro
    const userValue = validUsername.value.trim();
    const passwordValue = validPassword.value.trim();

    if (userValue !== user.value) { // En este caso vamos a comparar el valor que agregemos al input con el que pusimos anteriormente en el input de registro
        setErrorFor(validUsername, "El nombre de usuario ingresado es incorrecto");
    } else {
        setSuccessFor(validUsername);
        check5 = true;
    }

    if (passwordValue !== password.value) {
        setErrorFor(validPassword, "La contraseña ingresada es incorrecta");
    } else {
        setSuccessFor(validPassword);
        check6 = true; // Si las condiciones se cumplen haremos que check 5 y 6 sean true
    }
}

function validLoginForm() { //* Validamos el formulario de logeo
    if (check5 == true && check6 == true) { //* Al cumplir con las condiciones podemos pasar a lo siguiente ("la creacion de cards")
        Swal.fire({
            icon: 'success',
            title: '¡Bienvenido ' + user.value + ' a eMovies!',
            showConfirmButton: false,
            timer: 1500
        })

        userStorageUpdate() // mandamos a llamar la funcion que retendra los valores true del check 5 y 6
        mainSection.classList.remove("hiddeContent");
        containerUser.classList.add("hiddeContent"); // Ocultamos la seccion de formularios de registro/logeo y pasamos a la creacion de cards
    }
}

//! [1.3] Declaracion y unificacion de eventos

function userEvents() { //* Declaramos los eventos
    registerForm.addEventListener("submit", e => {
        e.preventDefault(); // Evitamos que el formulario recargue la pagina

        checkInputs(); // Mandamos a llamar la validacion de inputs
        validRegisterForm(); // Validamos el formulario de registro
    });

    loginForm.addEventListener("submit", e => { // Tanto el de registro como logeo posee un evento al enviar la informacion del formulario
        e.preventDefault();

        checkLoginInput(); // Hacemos lo mismo que en el registro pero para logeo
        validLoginForm();
        console.log(check5, check6); // Imprimimos el valor que efectivameente es verdadero
    });
}

//! [1.4] Almacenamiento de datos ingresados 

function userStorageUpdate() { //* Almacenamos / guardamos nuestros valores booleanos (check 5 y 6) de manera local
    let userJson = JSON.stringify(check5); // La pasamos a String
    let passJson = JSON.stringify(check6); // La pasamos a String

    localStorage.setItem("Name", userJson); // Almacenamos la misma
    localStorage.setItem("Pass", passJson); // Almacenamos la misma
}

function getUserInfoFromStorage() { //* Revertimos la transformacion a string para que al recargar la pagina, no se ejecute el formulario de registro / logeo

    let userJson = localStorage.getItem("Name"); // seleccionamos la clave a usar
    let passJson = localStorage.getItem("Pass"); // seleccionamos la clave a usar

    check5 = JSON.parse(userJson); // Usamos el metodo parse para revertir el mismo
    check6 = JSON.parse(passJson); // Usamos el metodo parse para revertir el mismo
}

function loginStorageValidation() { //* Validamos que los datos almacenados sean true
    if (check5 === true || check6 === true) {
        mainSection.classList.remove("hiddeContent"); // Al validar los booleanos pasaremos a ocultar automaticamente el registro / logeo
        containerUser.classList.add("hiddeContent");
    }
}

//! [1.5] Reunion de funciones

function mainUser() { //* Funcion principal
    userEvents(); // Llamamos al evento que nos permite registrar / logear
    getUserInfoFromStorage(); // LLamamos la funcion que transforma los datos a booleanos nuevamente
    loginStorageValidation(); // Llamos la funcion que ocultara los formularios si los checks son verdaderos despues de ser revertidos (volver a booleano)
}


//! [1.6] Llamada de funcion principal

mainUser() // llamamos a la funcion principal