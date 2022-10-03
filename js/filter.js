//TODO: ================ FILTRO DE BUSQUEDA (CARDS) ================

//! [1.0] Declaraciones

const d = document; // Accedemos al documento HTML

//! [1.1] Creacion del filtro

function searchFilter(input, selector) { //* La funcion nos pide 2 parametros, 1. INPUT que va a filtrar al tipear 2. CLASE a filtrar (En este caso filtramos la clase que poseen las películas creadas con el generador de cards)

    d.addEventListener("keyup", (e) => { // El key up (evento de teclado) es cuando escribimos la primera letra por lo que delegamos la funcion al mismo
        if (e.target.matches(input)) { // Esto hace que si el objeto que origino el evento, su selector(parametro 1) coincide con lo que viene en la variable input, entonces...
            console.log(e.target.value); // imprime el VALOR (lo que escribimos)
            filterEvents()

            if (e.key === "Escape" || e.target.value.length <= 8) { // Reiniciamos el valor al tocar la tecla ESC
                e.target.value = "Nombre: ";
            }
            //Lo de abajo basicamente coniste en recorrer el contenido (strings) que poseea la película, las películas/cards que coincidan con los datos tipeados se mantendran mientras que las que no coincidad se les añade la clase "filter" que le agrega un display none a la card
            d.querySelectorAll(selector).forEach((el) => {
                el.textContent.toLowerCase().includes(e.target.value.toLowerCase()) ? el.classList.remove("filter") : el.classList.add("filter"); // implementamos condiciones a traves de un operador ternario
            });
        }
    });
}

//TODO: ================ FILTRO VIA CHECKS (CARDS) ================

//! [2.0] Declaracion de variables

//? Input filtrador, label y elemento a filtrar

const horrorCheck = document.querySelector("#horrorCheck"); // input: es de tipo check el cual sera una condicion para filtrar
let horrorLab = document.querySelector(".horrorLab"); // Label: es el texto visible el cual estara ligado al checkbox donde el usuario podra "checkear" o "uncheckear" el contenido
let horrorGenre = document.getElementsByClassName("horrorCard") // Elemento: La card sera filtrada de acuerdo al "genero de película" que el mismo posea

const romanceCheck = document.querySelector("#romanceCheck");
let romanceLab = document.querySelector(".romanceLab");
let romanceGenre = document.getElementsByClassName("romanceCard");

const suspenseCheck = document.querySelector("#suspenseCheck");
let suspenseLab = document.querySelector(".suspenseLab");
let suspenseGenre = document.getElementsByClassName("suspenseCard");

const comedyCheck = document.querySelector("#comedyCheck");
let comedyLab = document.querySelector(".comedyLab");
let comedyGenre = document.getElementsByClassName("comedyCard");

const actionCheck = document.querySelector("#actionCheck");
let actionLab = document.querySelector(".actionLab");
let actionGenre = document.getElementsByClassName("actionCard");

const cienceCheck = document.querySelector("#cienceCheck");
let cienceLab = document.querySelector(".cienceLab");
let cienceFictionGenre = document.getElementsByClassName("scienceFictionCard");

const musicalCheck = document.querySelector("#musicalCheck");
let musicalLab = document.querySelector(".musicalLab");
let musicalGenre = document.getElementsByClassName("musicalCard");

const fantasyCheck = document.querySelector("#fantasyCheck");
let fantasyLab = document.querySelector(".fantasyLab");
let fantasyGenre = document.getElementsByClassName("fantasyCard");

const adventureCheck = document.querySelector("#adventureCheck");
let adventureLab = document.querySelector(".adventureLab");
let adventureGenre = document.getElementsByClassName("adventureCard");

//! [2.1] Declaracion de eventos

function filterEvents() { //* Llamos al evento change en cada checkbox el cual nos permitira reaccionar a cambios (checked, unchecked)
    horrorCheck.addEventListener("change", () => filterItem(horrorCheck, horrorGenre, horrorLab));
    romanceCheck.addEventListener("change", () => filterItem(romanceCheck, romanceGenre, romanceLab));
    suspenseCheck.addEventListener("change", () => filterItem(suspenseCheck, suspenseGenre, suspenseLab)); // Llamamos a cada checkbox delegandole el genero de pelicula y su label
    comedyCheck.addEventListener("change", () => filterItem(comedyCheck, comedyGenre, comedyLab));
    actionCheck.addEventListener("change", () => filterItem(actionCheck, actionGenre, actionLab));
    cienceCheck.addEventListener("change", () => filterItem(cienceCheck, cienceFictionGenre, cienceLab));
    musicalCheck.addEventListener("change", () => filterItem(musicalCheck, musicalGenre, musicalLab));
    fantasyCheck.addEventListener("change", () => filterItem(fantasyCheck, fantasyGenre, fantasyLab));
    adventureCheck.addEventListener("change", () => filterItem(adventureCheck, adventureGenre, adventureLab)); // la funcion filterItem sera las que nos permita filtrar cada elemento en el DOM via checks
}

//! [2.2] Funcion de filtro por medio de checks

function filterItem(inputCheck, genre, label) { //* La funcion se llevara a cabo a partir de tres parametros.

    // P1: input a checkear / P2: la clase que posee cada card (varia dependiendo el genero de pelicula con el que hayamos creado a la misma) / P3: el label, texto visual con el que se interactua
    if (inputCheck.checked) {
        for (const el of genre) { //Recorremos las cards de acuerdo a su genero (class)
            el.classList.add('filter'); // Las cards que coincidan con la class se les asignara otra la cual deshabilita la misma (display: none), es decir que no es visible
            label.classList.add("uncheckFilter"); // El usuario vera el texto de color gris, indicandole de manera intutuitiva que tiene que "uncheckear" para ver las cards nuevamente
        }
    } else { // Aqui hace lo contrario que arriba, es decir que al dar "uncheck" se podran ver las cards nuevamente
        for (const el of genre) {
            el.classList.remove('filter');
            label.classList.remove("uncheckFilter");
        }
    }
};

//! [2.3] Punto de encuentro de las funciones

function main() {
    //? Filtro de busqueda
    searchFilter(".card-filter", ".movieCard"); // Llamamos la funcion colocando 1ro. el input que busca, 2do. las cards que se filtran

    //? Filtro via checks
    filterEvents(); // Llamamos a la funcion que nos ayuda a filtrar el contenido por medio de checkboxes
};

//! [2.4] LLamada de la funcion principal

main();