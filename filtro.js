//TODO: ================ FILTRO DE BUSQUEDA (CARDS) ================

//! [1.0] Declaraciones

const d = document;

//! [1.1] Creacion del filtro

function searchFilter(input, selector) {//* La funcion nos pide 2 parametros, 1. INPUT que va a filtrar al tipear 2. CLASE a filtrar (En este caso filtramos la clase que poseen las películas creadas con el generador de cards)
    d.addEventListener("keyup", (e) => { // El key up (evento de teclado) es cuando escribimos la primera letra por lo que delegamos la funcion al mismo
        if (e.target.matches(input)) { // Esto hace que si el objeto que origino el evento, su selector(parametro 1) coincide con lo que viene en la variable input, entonces...

            console.log(e.target.value) // imprime el VALOR (lo que escribimos)
            //Lo de abajo basicamente coniste en recorrer el contenido (strings) que poseea la película, las películas/cards que coincidan con los datos tipeados se mantendran mientras que las que no coincidad se les añade la clase "filter" que le agrega un display none a la card
            d.querySelectorAll(selector).forEach((element) => element.innerText.toLowerCase().includes(e.target.value) ? element.classList.remove("filter") : element.classList.add("filter")) // Le decimos que el contenido textual legible (El texto que posee las figure en este caso) sea lo que se filtre
        }
    })
}

//! [1.2] Llamando al filtro

searchFilter(".card-filter", ".movieCard") // llamamos la funcion colocando 1. el input que busca 2. las cards que se filtran
