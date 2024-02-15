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


const API_KEY = "HDEBF23-6SH4XPP-J3BDH39-156PQCV";

const fetchMoviesByName = async (query, page = 1, limit = 10) => {
    const url = `https://api.kinopoisk.dev/v1.4/movie/search?page=${page}&limit=${limit}&query=${query}`;//в query попадает запрос поиска
    const headers = {
        accept: "application/json",
        "X-API-KEY": API_KEY,
    };

    const response = await fetch(url, { headers });
    const data = await response.json();

    return data;
};

// Пример использования
const movies = await fetchMoviesByName("avatar");

console.log(movies); // Выводит список фильмов

//КОНЕЦ ПЕРВОЙ ЧАСТИ ПОИСКА ПО НАЗВАНИЮ

//НАЧАЛО ВТОРОЙ ЧАСТИ ПОИСКА ПО НАЗВАНИЮ
// function showMovies(data) {
//     const moviesEl = document.querySelector(".movies");

//     // Очищаем предыдущие фильмы
//     document.querySelector(".movies").innerHTML = "";

//     data.films.forEach((movie) => {
//       const movieEl = document.createElement("div");
//       movieEl.classList.add("movie");
//       movieEl.innerHTML = `
//           <div class="movie__cover-inner">
//           <img
//             src="${movie.posterUrlPreview}"
//             class="movie__cover"
//             alt="${movie.nameRu}"
//           />
//           <div class="movie__cover--darkened"></div>
//         </div>
//         <div class="movie__info">
//           <div class="movie__title">${movie.nameRu}</div>
//           <div class="movie__category">${movie.genres.map(
//             (genre) => ` ${genre.genre}`
//           )}</div>
//           ${
//             movie.rating &&
//             `
//           <div class="movie__average movie__average--${getClassByRate(
//             movie.rating
//           )}">${movie.rating}</div>
//           `
//           }
//         </div>
//           `;
//       moviesEl.appendChild(movieEl);
//     });

//     if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const movies = await response.json();
//     return movies.docs;

//     } catch (error) {
//     console.error(error);
//     }
// }

// getMoviesByName("аватар путь воды").then(movies => {
//     console.log(movies);
// });

//Это пусть будет пока)
// function getObj(){
//     const token = '0P4K4P1-5PHMMD0-KXZ1VXP-9MQ1ZV3';
//     let movieTitle = 'Пятый элемент';
//     return fetch(`https://api.kinopoisk.dev/v1.4/movie/search?keyword=${encodeURIComponent(movieTitle)}`, {
//         headers: {
//             'X-API-KEY': token,
//             'Content-Type': 'application/json',
//         }
//     })
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.error('There was a problem with your fetch operation:', error);
//     });
// }

// document.querySelector('.findButton').addEventListener('click', getMoviesByName);
//   }

//   const form = document.querySelector("form");
//   const search = document.querySelector(".header__search");

//   form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const apiSearchUrl = `${API_URL_SEARCH}${search.value}`;
//     if (search.value) {
//       getMovies(apiSearchUrl);

//       search.value = "";
//     }
//   });
//КОНЕЦ ВТОРОЙ ЧАСТИ ПОИСКА ПО НАЗВАНИЮ







// const findButton = document.querySelector(".findButton");


//КОНЕЦ ПОИСКА






















































































// Lena
// const switcher = document.querySelector(".section-search__label");
// console.log(switcher);
let seriesArray = []; //series array

function getSeries() {
    let checkbox = document.querySelector('input[name="switcher"]:checked');
    console.log(checkbox);
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