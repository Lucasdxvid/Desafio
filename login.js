const registerForm = document.getElementById("formRegister");
const user = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const mainSection = document.getElementById("mainSection");
const containerUser = document.getElementById("containerUser");

let check1 = false;
let check2 = false;
let check3 = false;
let check4 = false;

function checkInputs() {
    // El metodo Trim remueve los espacios en blanco
    const userValue = user.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (userValue === "" || userValue.length <= 3) {
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
        check2 = true;
    }

    if (passwordValue === "" || passwordValue.length <= 4) {
        setErrorFor(password, "La contraseña necesita tener por lo menos 5 letras");
    } else {
        setSuccessFor(password);
        check3 = true;
    }

    if (password2Value === "") {
        setErrorFor(password2, "No puedes dejar espacios en blanco");
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, "La contraseña no coincide");
    } else {
        setSuccessFor(password2);
        check4 = true;
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function validRegisterForm() {
    if (check1 == true && check2 == true && check3 == true && check4 == true) {
        Swal.fire({
            icon: 'success',
            title: '¡La cuenta ' + user.value + ' fue creada con exito!',
            showConfirmButton: false,
            timer: 1500
        })
        registerForm.classList.add("hiddeContent");
        loginForm.classList.remove("hiddeContent");
    }
}

//! Paso 2

const loginForm = document.getElementById("formLogin");
const validUsername = document.getElementById("validUsername");
const validPassword = document.getElementById("validPassword");

let check5 = false;
let check6 = false;

function checkLoginInput() {
    const userValue = validUsername.value.trim();
    const passwordValue = validPassword.value.trim();

    if (userValue !== user.value) {
        setErrorFor(validUsername, "El nombre de usuario ingresado es incorrecto");
    } else {
        setSuccessFor(validUsername);
        check5 = true;
    }

    if (passwordValue !== password.value) {
        setErrorFor(validPassword, "La contraseña ingresada es incorrecta");
    } else {
        setSuccessFor(validPassword);
        check6 = true;
    }
}

function validLoginForm() {
    if (check5 == true && check6 == true) {
        Swal.fire({
            icon: 'success',
            title: '¡Bienvenido ' + user.value + ' a eMovies!',
            showConfirmButton: false,
            timer: 1500
        })

        userStorageUpdate()
        mainSection.classList.remove("hiddeContent");
        containerUser.classList.add("hiddeContent");
    }
}

function userEvents() {
    registerForm.addEventListener("submit", e => {
        e.preventDefault();

        checkInputs();
        validRegisterForm();
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        checkLoginInput();
        validLoginForm();
        console.log(check5, check6)
    });
}

// //! haaaaa

// console.log (check5, check6)

function loginStorageValidation() {
    if (check5 === true || check6 === true) {
        mainSection.classList.remove("hiddeContent");
        containerUser.classList.add("hiddeContent");
    }
}

function userStorageUpdate() { //* Almacenamos / guardamos nuestra array de manera local (LocalStorage)
    let userJson = JSON.stringify(check5); // La pasamos a String
    let passJson = JSON.stringify(check6); // La pasamos a String

    localStorage.setItem("Name", userJson); // Almacenamos la misma
    localStorage.setItem("Pass", passJson); // Almacenamos la misma
}

function getUserInfoFromStorage() { //* revertimos la transformacion a string

    let userJson = localStorage.getItem("Name"); // seleccionamos la clave a usar
    let passJson = localStorage.getItem("Pass"); // seleccionamos la clave a usar

    check5 = JSON.parse(userJson); // Usamos el metodo parse para revertir el mismo
    check6 = JSON.parse(passJson); // Usamos el metodo parse para revertir el mismo
}

function mainUser() {
    userEvents()
    getUserInfoFromStorage()
    loginStorageValidation()
}

mainUser()