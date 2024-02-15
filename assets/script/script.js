// import { KinopoiskDev } from './node_modules/@openmoviedb/kinopoiskdev_client';
// const kp = new KinopoiskDev('0P4K4P1-5PHMMD0-KXZ1VXP-9MQ1ZV3');
// const {data} = await kp.movie.getById(666);
// console.log(data); //это для подключения библиотеки

//const { json } = require("express/lib/response");

//НАЧАЛО ПОИСКА


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

    //document.querySelector('.findButton').addEventListener('click', getMoviesByName);


//КОНЕЦ ПОИСКА






















































































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