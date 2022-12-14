const startAddMovieBtn = document.querySelector("header button");
const addMovieModal = document.getElementById("add-modal");
const backDrop = document.getElementById("backdrop");
const movieListUl = document.getElementById("movie-list");
const cancelAddMovieBtn = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieBtn = cancelAddMovieBtn.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");
const deleteMovieModal = document.getElementById("delete-modal");

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};


const toggleBackdrop = () => {
  backDrop.classList.toggle("visible");
};

const closeMovieModal = () => {
  addMovieModal.classList.remove("visible");
};

const showMovieModal = () => {
  addMovieModal.classList.add("visible");
  toggleBackdrop();
};

const clearMovieInput = () => {
  for (const usrInput of userInputs) {
    usrInput.value = "";
  }
};

const cancelAddMovieHandler = () => {
  closeMovieModal();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    parseInt(ratingValue) < 1 ||
    parseInt(ratingValue > 5)
  ) {
    alert("Please enter valid values (rating between 1 and 5).");
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
  };

  movies.push(newMovie);
  console.log(movies);
  closeMovieModal();
  clearMovieInput();
  toggleBackdrop();
  renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
  updateUI();
};

const backdropClickHandler = () => {
  closeMovieModal();
  closeMovieDeleteionModal();
  clearMovieInput();
};

const deleteMovieHandler = (movieId) => {
let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById("movie-list");
  // listRoot.removeChild(children[movieIndex]);
  listRoot.children[movieIndex].remove();
};

const closeMovieDeleteionModal = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove("visible");
};

const startDeleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.add("visible");
  toggleBackdrop();
  const cancelDeletionButton =  deleteMovieModal.querySelector(".btn--passive");
  const confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");
  
  confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(True))
  
  cancelDeletionButton.removeEventListener("click", closeMovieDeleteionModal)
  confirmDeletionButton.removeEventListener 
  cancelDeletionButton.addEventListener("click", closeMovieDeleteionModal)
  confirmDeletionButton.addEventListener("click", deleteMovieHandler.bind(null, movieId))
  // deleteMovie(movieId)
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
    <div calss="movie-element__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;
  newMovieElement.addEventListener("click", startDeleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);
};

startAddMovieBtn.addEventListener("click", showMovieModal);
backDrop.addEventListener("click", backdropClickHandler);
cancelAddMovieBtn.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieBtn.addEventListener("click", addMovieHandler);
