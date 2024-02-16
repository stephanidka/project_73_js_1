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

function submitModal(){
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

    if(!checkboxInput.checked){
        alert("Please accept the terms and conditions")
        return;
    }

    if (passwordValue === repeatValue){
        alert("Welcome!");
    }
    else {
        alert("Password mismatch");
    };

    //чекбоксы активны при регистрации 
    const checkMovie = document.querySelectorAll('.check_movie');
    checkMovie.forEach((elem) => {
        elem.removeAttribute('disabled');
    });
};
validateButton.addEventListener('click', submitModal);

    
// модальное окно 
const myModal = document.getElementById("my-modal"),
    openModal = document.querySelector(".open_modal");

openModal.addEventListener("click", function() {
    myModal.classList.add("open");
})
// Закрыть модальное окно
document.getElementById("close-my-modal-btn").addEventListener("click", function() {
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



const API_KEY = "HDEBF23-6SH4XPP-J3BDH39-156PQCV";
const API_URL_SEARCH = 'https://api.kinopoisk.dev/v1.4/movie/search?page=100&limit=2';

const fetchMoviesByName = async (query, page = 1, limit = 10) => {
  const url = `https://api.kinopoisk.dev/v1.4/movie/search?page=${page}&limit=${limit}&query=${query}`;
  const headers = new Headers({
    accept: "application/json",
    "X-API-KEY": API_KEY,
  });

  const response = await fetch(url, { headers });
  const data = await response.json();

  return data;
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
  const moviesEl = document.querySelector(".search-results");

  moviesEl.innerHTML = "";

  if (data.docs && data.docs.length > 0) {
    data.docs.forEach((movie) => {
      const movieEl = document.createElement("div");
      movieEl.classList.add("movie");
      console.log("Poster URL:", movie.previewUrl);
      movieEl.innerHTML = `
        <div class="movie__cover-inner">
          <img
            src="${movie.previewUrl}"
            class="movie__cover"
            alt="${movie.name}"
          />
          <div class="movie__cover--darkened"></div>
        </div>
        <div class="movie__info">
          <div class="movie__title">${movie.name}</div>
          <div class="movie__category">${movie.genres.map(
            (genre) => ` ${genre.genre}`
          )}</div>
          ${
            movie.rating &&
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
    console.error("No films data found");
    console.log("API Response:", data);
  }
}




const form = document.querySelector(".search_movie");
const search = document.querySelector(".inputHeader");


form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Remove the additional query parameters from apiSearchUrl
  const apiSearchUrl = `${API_URL_SEARCH}&query=${search.value}`;
  
  if (search.value) {
    const moviesData = await fetchMoviesByName(search.value);

    // Log the entire API response to the console
    console.log("API Response:", moviesData);

    showMovies(moviesData);
    // Remove this line as it is unnecessary and causes an error
    // fetchMoviesByName(apiSearchUrl);

    search.value = "";
  }
});


//ЧАСТИ ПОИСКА ПО НАЗВАНИЮ


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
const token = '0P4K4P1-5PHMMD0-KXZ1VXP-9MQ1ZV3';
const fetchFiltrMovies = async (
    year,
    countrie,
    genres,
    page = 1,
    limit = 10
        ) => {
    const url = `https://api.kinopoisk.dev/v1.4/movie?page=${page}&limit=${limit}&selectFields=countries&selectFields=description&selectFields=name&selectFields=genres&selectFields=poster&selectFields=shortDescription&selectFields=year&notNullFields=id&year=${year}&genres.name=${genres}&countries.name=${countrie}`;
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

    const movie = res.docs[0]; // это добавление картики в блок search-results
    console.log(movie);
    const postMovies = document.querySelector(".search-results");
    const generateMovieHTML = (movie) => {
        return `
        <div class="post">
        <img src="${movie.poster.url}" alt="${movie.name} Poster">
            <p>${movie.name}</p>
            <p>${movie.countries.map(country => country.name).join(', ')}</p>
            <p>${movie.year}</p>
        </div>`;
};
const movieHTML = generateMovieHTML(movie);
postMovies.innerHTML += movieHTML; // всё, добавлена

};
document.querySelector('.section-search__glow-on-hover').addEventListener('click', fetchFilteredMovies);

// ВСЁ, КОНЕЦ. 






















































































// Lena
// const switcher = document.querySelector(".section-search__label");
// console.log(switcher);
let seriesArray = []; //series array

function getSeries() {
    let checkbox = document.querySelector('input[name="switcher"]:checked');
    let output = [];
    checkbox.forEach((checkbox) => {
        output.push(checkbox.value);
    });
    seriesArray = output;
}
console.log(seriesArray);


    // Lena


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