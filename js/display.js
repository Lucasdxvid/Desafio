//todo =============== Creacion de cards (Visualmente en el HTML) ===============

//! [1.0] Constructor "Display"

export default class Display {
  constructor(moviesInfo, template, container) { //* Recibe parametros (Info de api, template (estructura de las cards) y el contenedor HTML)
    this.moviesInfo = moviesInfo; // Este vendria a ser la info de la API
    this.template = template;
    this.container = container;


    this.fragment = new DocumentFragment();
    this.clone = this.template.cloneNode(true);
    this.card = this.template.querySelector(".card");
  }

  displayDefaultCards() { //* Este construira las cards donde se trae las imagenes y titulos

    //? Info de las peliculas

    let moviesImg = this.moviesInfo[0];
    let moviesTitles = this.moviesInfo[1];

    const imgArray = this.getNewArray(moviesImg);
    const titleArray = this.getNewArray(moviesTitles);

    this.container.forEach((row, i) => {

      // Aqui hacemos que si estamos en la primera fila solo nos almacene la mitad del array y en la siguiente iteracion nos almacene la otra mitad

      i === 0 ? (moviesTitles = titleArray[0]) : (moviesTitles = titleArray[1]);

      imgArray[i].forEach((movie, i) => {
        this.card.children[0].setAttribute("src", `${movie}`); //A la img le agregamos el atributo SRC para obtener la imagen de la pelicula
        this.card.children[1].children[0].innerText = moviesTitles[i]; // Aqui hacemos lo mismo pero insertamos el titulo

        this.clone = this.template.cloneNode(true); // Clonamos los templates al crear la movie
        this.fragment.appendChild(this.clone);
      });

      row.appendChild(this.fragment); //Introducimos la pelicula creada a nuestra fila
    });
  }

  displayUserCards() {
    this.clearMovies();
    this.filteruserCards();
  }

  filteruserCards() {
    const sliceMovies = this.moviesInfo.slice(0, 6);

    sliceMovies.forEach((movie, i) => {
      this.card.id = `${i}`;

      this.assignInfo(movie);

      this.clone = this.template.cloneNode(true);
      this.fragment.appendChild(this.clone);
    });

    this.container.appendChild(this.fragment);
    this.container.style.display = "flex";
  }

  assignInfo(movie) {
    const newCardImg = this.card.children[0];
    const newCardBody = this.card.children[1];

    newCardImg.setAttribute("src", `${movie.Poster}`);
    newCardBody.children[0].innerText = movie.Title;
  }

  clearMovies() {
    while (this.container.firstChild) {
      this.container.firstChild.remove();
    }
  }

  getNewArray(movies) { //* Aqui basciamente estamos asignando una fila de 6 peliculas (Obtenemos la mitad del array de 12)
    const left = movies;
    const right = left.splice(0, Math.ceil(left.length / 2));
    return [left, right];
  }
}