const fileName = 'search_licon 1.png';
const encodedFileName = encodeURIComponent(fileName);
const url = `http://127.0.0.1:5500/assets/icons/${encodedFileName}`; // эта фигня убирает какие-то лишние пробелы
"use strict"
// валидация модального окна регистрации 
const nameInput = document.getElementById('name_input');
const emailInput = document.getElementById('email_input');
const ageInput = document.getElementById('age_input');
const passwordInput = document.getElementById('password_input');
const repeatInput = document.getElementById('repeat_input');
const checkboxInput = document.getElementById('checkbox_input')
const validateButton = document.getElementById("validate");

function submitModal() {
  let nameValue = nameInput.value;
  if (nameValue.length < 2) {
    passwordInput.value = "";
    repeatInput.value = "";
    alert("Enter your name please, at least 2 characters");
    return;
  } else {

  };
  let emailValue = emailInput.value;
  const regexpEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regexpEmail.test(emailValue)) {
    console.log('it works :)')
  } else {
    passwordInput.value = "";
    repeatInput.value = "";
    alert("Enter a valid e-mail please");
    return;
  };
  let ageValue = ageInput.value;
  if (ageValue.length === 0) {
    passwordInput.value = "";
    repeatInput.value = "";
    alert("Enter your age please");
    return;
  }
  let passwordValue = passwordInput.value;
  let regexpPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!regexpPassword.test(passwordValue)) {
    console.log('it works too');
    repeatInput.value = "";
    alert("Enter your password please");
    return;
  }
  else {
  };

  let repeatValue = repeatInput.value;
  if (repeatValue.length === 0) {
    alert("Repeat your password please");
    return;
  }
  else {
  };

  if (!checkboxInput.checked) {
    alert("Please accept the terms and conditions")
    return;
  }

  if (passwordValue === repeatValue) {
    alert("Welcome!");
  }
  else {
    alert("Password mismatch");
  };
};
validateButton.addEventListener('click', submitModal);
//чекбоксы активны при регистрации 
document.getElementById('validate').addEventListener('click', function () {

  //чекбоксы активны при регистрации 
  const checkMovie = document.querySelectorAll('.check_movie');
  checkMovie.forEach((elem) => {
    elem.removeAttribute('disabled');
  });
});
validateButton.addEventListener('click', submitModal);


// модальное окно 
const myModal = document.getElementById("my-modal"),
  openModal = document.querySelector(".open_modal");

openModal.addEventListener("click", function () {
  myModal.classList.add("open");
})
// Закрыть модальное окно
document.getElementById("close-my-modal-btn").addEventListener("click", function () {
  myModal.classList.remove("open");
})
// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    myModal.classList.remove("open");
  }
});
// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
myModal.addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
});
//НАЧАЛО ПОИСКА ПО НАЗВАНИЮ





const API_KEY = "4WDPHG2-KX44HDM-K2F0Z45-CB19KQT";
const API_URL_SEARCH = 'https://api.kinopoisk.dev/v1.4/movie/search';

const fetchMoviesByName = async (query, page = 1, limit = 10) => {
  const encodedQuery = encodeURIComponent(query); // Кодирование значения query
  const url = `${API_URL_SEARCH}?page=${page}&limit=${limit}&query=${encodedQuery}`;
  // const url = `${API_URL_SEARCH}?page=${page}&limit=${limit}&query=${query}`;
  const headers = {
    accept: "application/json",
    "X-API-KEY": API_KEY,
  };

  try {
    const response = await fetch(url, { headers });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Response from API:", data); // Log the response
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error.message);
    return { films: [] }; // Return an empty array if there's an error
  }
};


function getClassByRate(vote) {
  if (vote >= 7) {
    return "green";
  } else if (vote > 5) {
    return "orange";
  } else {
    return "red";
  }
}

function showMovies(data) {
  const moviesEl = document.querySelector(".search-results__conteiner");

  // Очищаем предыдущие фильмы
  moviesEl.innerHTML = "";

  if (data && data.docs && Array.isArray(data.docs)) {
    data.docs.forEach((movie) => {
      const movieEl = document.createElement("div");
      movieEl.classList.add("movie");
      movieEl.innerHTML = `
        <div class="movie__cover-inner">
          <img
            src="${movie.posterUrlPreview}"
            class="movie__cover"
            alt="${movie.nameRu}"
          />
          <div class="movie__cover--darkened"></div>
        </div>
        <div class="movie__info">
          <div class="movie__title">${movie.nameRu}</div>
          <div class="movie__category">${movie.genres.map(
        (genre) => ` ${genre.genre}`
      )}</div>
          ${movie.rating &&
        `
              <div class="movie__average movie__average--${getClassByRate(
          movie.rating
        )}">${movie.rating}</div>
            `
        }
        </div>
      `;
      moviesEl.appendChild(movieEl);
    });
  } else {
    console.error("Data or data.docs is undefined or not an array");
  }
}



const form = document.querySelector(".search_movie");
const search = document.querySelector(".inputHeader");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (search.value) {
    try {
      const moviesData = await fetchMoviesByName(search.value);
      showMovies(moviesData);
    } catch (error) {
      console.error("Error in form submission:", error.message);
    }

    search.value = "";
  }
});







//БУРГЕР МЕНЮ НАЧАЛО
const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;


const menu = document.querySelector("#menu").cloneNode(1);


hamb.addEventListener("click", hambHandler);


function hambHandler(e) {
  e.preventDefault();

  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}


function renderPopup() {
  popup.appendChild(menu);
}


const links = Array.from(menu.children);


links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});


function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}

//БУРГЕР МЕНЮ КОНЕЦ


//Конец части Софии
//КОНЕЦ ПОИСКА





// ЭТО ПОИСК ПО ПАРАМЕТРАМ,  
// Пока что он выводит фильмы в консоль, внутри этого кода надо прописать вывод на страницу 
// и фильтр фильмы-сериалы
const findButton = document.querySelector(".section-search__glow-on-hover");
const token = '4WDPHG2-KX44HDM-K2F0Z45-CB19KQT';
const fetchFiltrMovies = async (
  year,
  countrie,
  genres,
  page = 1,
  limit = 9
) => {
  const switcherMovieSeries = document.getElementById("switch") // это переключатель с фильмов на сериалы
  let responseURL;
  if (switcherMovieSeries.checked) {
    responseURL = `https://api.kinopoisk.dev/v1.4/movie?type=tv-series&&animated-series&page=${page}&limit=${limit}&selectFields=countries&selectFields=description&selectFields=name&selectFields=genres&selectFields=poster&selectFields=type&selectFields=shortDescription&selectFields=year&notNullFields=id&year=${year}&genres.name=${genres}&countries.name=${countrie}`;
  } else {
    responseURL = `https://api.kinopoisk.dev/v1.4/movie?type=movie&&cartoon&&anime&page=${page}&limit=${limit}&selectFields=countries&selectFields=description&selectFields=name&selectFields=genres&selectFields=poster&selectFields=type&selectFields=shortDescription&selectFields=year&notNullFields=id&year=${year}&genres.name=${genres}&countries.name=${countrie}`;
  }
  const url = responseURL;
  const headers = {
    accept: "application/json",
    "X-API-KEY": token,
  };
  const response = await fetch(url, { headers });
  const data = await response.json();
  return data;
};
const fetchFilteredMovies = async () => {
  const yearSelect = document.getElementById('years-select').value;
  const countrySelect = document.getElementById('country_select').value;
  const genreCheckboxes = Array.from(document.querySelectorAll('.container-input__tag[name="genre"]:checked')).map(checkbox => checkbox.value);
  const res = await fetchFiltrMovies(yearSelect, countrySelect, genreCheckboxes);
  console.log(res);
  const postMovies = document.querySelector(".search-results__conteiner");
  postMovies.innerHTML = '';
  for (let i = 0; i <= res.docs.length; i++) {
    const movie = res.docs[i];
    console.log(movie);
    const generateMovieHTML = (movie) => {
      return `
        <div class="post">
            <img class="search-results__img" src="${movie.poster.url}" alt="${movie.name}">
            <p class="search-results__name">${movie.name}</p>
            <p class="search-results__par">${movie.countries.map(country => country.name).join(', ')}</p>
            <p class="search-results__par">${movie.year}</p>
            <button class="btn__add" type="button">Add to my film list</button>
        </div>`;
    };
    const movieHTML = generateMovieHTML(movie);
    postMovies.innerHTML += movieHTML; // всё, добавлена
  }
};
document.querySelector('.section-search__glow-on-hover').addEventListener('click', fetchFilteredMovies);

// ВСЁ, КОНЕЦ. 






















































































// Lena
// const switcher = document.querySelector(".section-search__label");
// console.log(switcher);
// let seriesArray = []; //series array

// function getSeries() {
//   let checkbox = document.getElementById("switch");
//   if (checkbox.checked == true) {
//     const fetchFiltrSeries = async (
//       year,
//       countrie,
//       genres,
//       page = 1,
//       limit = 10,
//       type = tv - series,
//     ) => {
//       const url = `https://api.kinopoisk.dev/v1.4/movie?page=${page}&limit=${limit}&selectFields=countries&selectFields=description&selectFields=name&selectFields=genres&selectFields=poster&selectFields=shortDescription&selectFields=year&notNullFields=id&year=${year}&genres.name=${genres}&countries.name=${countrie}$type.name=${tv - series}`;
//       const titles = {
//         accept: "application/json",
//         "X-API-KEY": token,
//       };
//       const response = await fetch(url, { titles });
//       const data = await response.json();
//       return data;
//     };
//     const fetchFilteredSeries = async () => {
//       const series = Array.type[tv - series];
//       const result = await fetchFiltrSeries;
//       console.log(result);
//     }
//   }
// };

//     }
// console.log(checkbox);
// let output = [];
// checkbox.forEach((checkbox) => {
//     output.push(checkbox.value);
//     // });
//     // seriesArray = output;
// }

const submit = document.getElementById("submit");
function subscribeCheckValidity(e) {
  e.preventDefault();
  const emailCheck = document.getElementById("e-mail");
  const expression =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const message = document.querySelector(".message");

  if (!validate(expression, emailCheck.value)) {
    notValid(submit, message, "Your email is invalid.");
  } else {
    valid(submit, message, "You have successfully subscribed.");
  }

  function validate(regex, submit) {
    return regex.test(submit);
  }
  function notValid(submit, el, mess) {
    submit.classList.add("is-invalid");
    el.innerHTML = mess;
  }
  function valid(submit, el, mess) {
    submit.classList.remove("is-invalid");
    submit.classList.add("is-valid");
    el.innerHTML = mess;
  }
}
submit.addEventListener("click", subscribeCheckValidity);
// Lena 