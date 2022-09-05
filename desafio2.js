// Paso 0: Bienvenida a la página

const REQUEST_1 = alert("¡Bienvenido a eMovies! El mejor foro de películas \n Completa los siguientes pasos para poder acceder a esta gran comunidad");

// Paso 1: Registro de Cuenta

const REQUEST_2 = alert("¡Primer paso! \n Vamos a registrar tus datos así poder acceder a esta gran comunidad");

const NEW_USERNAME = prompt("Elige el nickname que tendra tu cuenta");
const NEW_PASSWORD = prompt("Elige la contraseña que tendra tu cuenta");

// Paso 1: Ingresar Usuario

const REQUEST_3 = alert("¡Bien hecho! \n Ahora necesitamos que introduzcas el nombre de usuario y contraseña que acabas de crear");

const NAME = () => {
    do {
        user = prompt("Ingresa tu nombre de usuario")
        if (user != NEW_USERNAME) {
            alert("Nickname Incorrecto")
        }
    } while (user != NEW_USERNAME) {
        alert("El nickname: " + user + " es correcto")
    }
};

// Paso 2: Ingresar Contraseña

const PASSWORD = () => {
    do {
        key = prompt("Ingresa tu contraseña")
        if (key != NEW_PASSWORD) {
            alert("La contraseña ingresada es incorrecta, vuelve a intentarlo")
        }
    } while (key != NEW_PASSWORD) {
        alert("Todos los datos ingresados son correctos" + "\n ¡Bienvenido " + user + "!")
    }
};

NAME();
PASSWORD();

// Paso 3: Verificación humano

const REQUEST_4 = alert("Ahora solo necesitamos comprobar que no eres un robot \n A continuación vas a ver un contador de elefantes del 2 al 10 y deberas decifrar: \n ¿Cual es el número faltante entre 2-10?");

const ELEPHANT_COUNT = () => {
    for (let i = 2; i <= 10; i++) {
        if (i == 7) {
            continue;
        }
        alert(i + " elefantes");
        console.log(i + " elefantes")
    }
};

const ELEPHANT_VERIFICATION = () => {
    let elephant = parseInt(prompt("Ingresa el número faltante entre 2-10"))

    while (elephant != 7) {
        alert("¡Incorrecto! Vuelve a intentarlo...");
        elephant = prompt("RECUERDA: Entre 1-10")
    }
};

ELEPHANT_COUNT();
ELEPHANT_VERIFICATION();

// Paso 4: Seleccionar plan de suscripción

const seleccionPlan = () => {
    let plan = parseInt(prompt("Elige tu plan de suscripción: \n 0. Free - ∞ meses de suscripción \n 1. Estándar - 1 mes de suscripción \n 2. Estándar - 3 meses de suscripción \n 3. Estándar - 6 meses de suscripción \n 4. Estándar - 12 meses de suscripción"))

    switch (plan) {
        case 0:
            alert("Bien hecho, seleccionaste el plan gratuito \n (0 AR$) \n (Recuerda que el mismo esta limitado a 720p con anuncios obligatorios)")
            plan = 0
            break;
        case 1:
            alert("Bien hecho, seleccionaste el plan de 1 mes \n (300 AR$)")
            plan = 1
            break;
        case 2:
            alert("Bien hecho, seleccionaste el plan de 3 meses \n (900 AR$)")
            plan = 2
            break;
        case 3:
            alert("Bien hecho, seleccionaste el plan de 6 meses \n (1800 AR$)")
            plan = 3
            break;
        case 4:
            alert("Bien hecho, seleccionaste el plan anual \n (3600 AR$)")
            plan = 4
            break;
        default:
            alert("La opción elegida no existe \n Recarga la página e intentalo nuevamente (CTRL + R)")
            plan = 0
    };

    return plan;
};

const planAlert = (plan) => {

    planSeleccionado = seleccionPlan(plan)

    if (planSeleccionado == 0) {
        planSeleccionado = 0
        alert("El precio sin impuestos es de: 0 AR$")
    } else if (planSeleccionado == 1) {
        planSeleccionado = 300
        alert("El precio sin impuestos es de: 300 AR$")
    } else if (planSeleccionado == 2) {
        planSeleccionado = 900
        alert("El precio sin impuestos es de: 900 AR$")
    } else if (planSeleccionado == 3) {
        planSeleccionado = 1800
        alert("El precio sin impuestos es de: 1800 AR$")
    } else if (planSeleccionado == 4) {
        planSeleccionado = 3600
        alert("El precio sin impuestos es de: 3600 AR$")
    } else {
        planSeleccionado = 0
        alert("Vaya, parece que no seleccionaste ningun plan. \n Te asignaremos una cuenta free \n (Puedes cambiar de plan en cualquier momento) \n El precio sin impuestos es de: 0 AR$")
    };

    return planSeleccionado;
};

planAlert();

// Paso 5: Precio Total a pagar

let precioProducto = planSeleccionado;
let descuento = 0;

const IMPUESTO = 0.75;
const suma = (valorUno, valorDos) => valorUno + valorDos;
const resta = (valorUno, valorDos) => valorUno - valorDos;
const calcularIMPUESTO = (subtotal) => subtotal * IMPUESTO;
const mostrarPrecioFinal = (precio) => alert(precio);

const solicitarCupon = () => {
    cupon = prompt("Ingresa tu cupon de descuento \n (¡Recuerda usar el código ((eMovies)) para tener 150 AR$ de descuento en tu primer pago!)")
    if (cupon == "eMovies") {
        descuento = 150;
    } else {
        descuento = 0;
    }
};

solicitarCupon();

let subtotal = resta(precioProducto, descuento);
const IMP_FINAL = calcularIMPUESTO(subtotal);
const PRECIO_FINAL = suma(subtotal, IMP_FINAL);

mostrarPrecioFinal(PRECIO_FINAL + " AR$");