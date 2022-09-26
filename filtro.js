const d = document;

function searchFilter(input, selector) {
    d.addEventListener("keyup", (e) => { // El key up (evento de teclado) es cuando escribimos la primera letra por lo que delegamos la funcion al mismo
        if (e.target.matches(input)) { // Esto hace que si en el objeto que origino el evento, su selector coincide con lo que viene en la variable input, entonces...

            console.log(e.target.value) // imprime el VALOR (lo que escribimos)
            d.querySelectorAll(selector).forEach((element) => element.innerText.toLowerCase().includes(e.target.value) ? element.classList.remove("filter") : element.classList.add("filter")) // Le decimos que el contenido textual (El texto que posee las figure en este caso) se transforme a minusculas
        }
    })
}

searchFilter(".card-filter", ".movieCard")
