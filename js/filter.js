//TODO: ================ FILTRO DE BUSQUEDA (CARDS) ================

//! [1.0] Declaraciones

const d = document;

//! [1.1] Creacion del filtro

function searchFilter(input, selector) { //* La funcion nos pide 2 parametros, 1. INPUT que va a filtrar al tipear 2. CLASE a filtrar (En este caso filtramos la clase que poseen las películas creadas con el generador de cards)

    d.addEventListener("keyup", (e) => { // El key up (evento de teclado) es cuando escribimos la primera letra por lo que delegamos la funcion al mismo
        if (e.target.matches(input)) { // Esto hace que si el objeto que origino el evento, su selector(parametro 1) coincide con lo que viene en la variable input, entonces...
            console.log(e.target.value); // imprime el VALOR (lo que escribimos)

            if (e.key === "Escape" || e.target.value.length <= 8) { // Reiniciamos el valor al tocar la tecla ESC
                e.target.value = "Nombre: ";
            }
            //Lo de abajo basicamente coniste en recorrer el contenido (strings) que poseea la película, las películas/cards que coincidan con los datos tipeados se mantendran mientras que las que no coincidad se les añade la clase "filter" que le agrega un display none a la card
            d.querySelectorAll(selector).forEach((el) => {
                el.textContent.toLowerCase().includes(e.target.value.toLowerCase()) ? el.classList.remove("filter") : el.classList.add("filter");
            });
        }
    });
}

//! [1.2] Llamando al filtro

searchFilter(".card-filter", ".movieCard"); // llamamos la funcion colocando 1. el input que busca 2. las cards que se filtran


//todo: aaa

//? Input filtrador, label y elemento a filtrar

const horrorCheck = document.querySelector("#horrorCheck");
let horrorLab = document.querySelector(".horrorLab");
let horrorGenre = document.getElementsByClassName("horrorCard")

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


function filterEvents() {
    horrorCheck.addEventListener("change", () => filterItem(horrorCheck, horrorGenre, horrorLab));
    romanceCheck.addEventListener("change", () => filterItem(romanceCheck, romanceGenre, romanceLab));
    suspenseCheck.addEventListener("change", () => filterItem(suspenseCheck, suspenseGenre, suspenseLab));
    comedyCheck.addEventListener("change", () => filterItem(comedyCheck, comedyGenre, comedyLab));
    actionCheck.addEventListener("change", () => filterItem(actionCheck, actionGenre, actionLab));
    cienceCheck.addEventListener("change", () => filterItem(cienceCheck, cienceFictionGenre, cienceLab));
    musicalCheck.addEventListener("change", () => filterItem(musicalCheck, musicalGenre, musicalLab));
    fantasyCheck.addEventListener("change", () => filterItem(fantasyCheck, fantasyGenre, fantasyLab));
    adventureCheck.addEventListener("change", () => filterItem(adventureCheck, adventureGenre, adventureLab));
}

function filterItem(inputCheck, genre, label) {

    if (inputCheck.checked) {
        for (const el of genre) {
            el.classList.add('filter');
            label.classList.add("uncheckFilter");
        }
    } else {
        for (const el of genre) {
            el.classList.remove('filter');
            label.classList.remove("uncheckFilter");
        }
    }
};

filterEvents();