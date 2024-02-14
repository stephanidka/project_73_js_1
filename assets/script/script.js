// import { KinopoiskDev } from './node_modules/@openmoviedb/kinopoiskdev_client'; //это для подключения библиотеки
// const kp = new KinopoiskDev('0P4K4P1-5PHMMD0-KXZ1VXP-9MQ1ZV3');

// const {data} = await kp.movie.getById(666);
// console.log(data); //это как мы будем писать код, если она подключится :)

const findButton = document.querySelector(".findButton") 
const token = '0P4K4P1-5PHMMD0-KXZ1VXP-9MQ1ZV3';
const headers = {
    "X-API-KEY": token
};
// // вот это код из документации. Поиск по названию) 
// async function getMoviesByName(name, page = 1, limit = 1) {
//     try {
//     const response = await fetch('https://api.kinopoisk.dev/v1.2/movie/search?' + new URLSearchParams({
//         "query": name,
//         "limit": limit,
//         "page": page,
//     }), {
//         headers: headers
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
// document.querySelector('.findButton').addEventListener('click', async () => {
//     try {
//         const movies = await getMoviesByName("аватар путь воды");
//         console.log(movies);
//     } catch (error) {
//         console.error(error);
//     }
// }); // тут теперь висит правильный обработчик события.


// Фильтрация карточек
function getSearchParams() {
    const country = document.querySelector(".section-search__input_search_one").value.trim();
    const year = document.querySelector(".section-search__input_search_two").value.trim();
    const genres = Array.from(document.querySelectorAll(".container-input__tag:checked")).map(input => input.nextSibling.textContent.trim());
    return { country, year, genres };
    }

  // Функция для отправки запроса на сервер с параметрами фильтрации
async function filterMovies() {
    const {country, year, genres} = getSearchParams();
    try {
        const response = await fetch('https://api.kinopoisk.dev/v1.4/movie' + new URLSearchParams({
            "limit": 1,
            "page": 1,
            "genres.name": genres,
        }), 
        {
            headers: headers
        }
        );
    
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log("Filtered parameters:", { country, year, genres });
        // const movies = await response.json();
        // return movies.docs;
    
        } catch (error) {
        console.error(error);
        }
    }

    document.querySelector('.findButton').addEventListener('click', async () => {
        try {
            const movies = await filterMovies();
            console.log(movies);
        } catch (error) {
            console.error(error);
        }
    });












































































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