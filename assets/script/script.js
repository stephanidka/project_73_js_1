const findButton = document.querySelector(".section-search__glow-on-hover");
const fileName = 'search_licon 1.png';
const encodedFileName = encodeURIComponent(fileName);
const url = `http://127.0.0.1:5500/assets/icons/${encodedFileName}`;

// function getObj() {
// 	const token = "0P4K4P1-5PHMMD0-KXZ1VXP-9MQ1ZV3";
// 	let movieTitle = "Пятый элемент";
// 	return fetch(
// 		`https://api.kinopoisk.dev/v1.4/movie/search?keyword=${encodeURIComponent(
// 			movieTitle
// 		)}`,
// 		{
// 			headers: {
// 				"X-API-KEY": token,
// 				"Content-Type": "application/json",
// 			},
// 		}
// 	)
// 		.then((response) => {
// 			if (!response.ok) {
// 				throw new Error("Network response was not ok");
// 			}
// 			return response.json();
// 		})
// 		.then((data) => {
// 			console.log(data);
// 		})
// 		.catch((error) => {
// 			console.error("There was a problem with your fetch operation:", error);
// 		});
// }

// document.querySelector(".findButton").addEventListener("click", getObj);

// import { KinopoiskDev } from './node_modules/@openmoviedb/kinopoiskdev_client';
// const kp = new KinopoiskDev('0P4K4P1-5PHMMD0-KXZ1VXP-9MQ1ZV3');
// const {data} = await kp.movie.getById(666);
// console.log(data); //это для подключения библиотеки

// РАСКОММЕНТИРОВАТЬ!!!!
// const findButton = document.querySelector(".findButton") 

// вот это код из документации
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

// getMoviesByName("аватар путь воды").then(movies => {
//     console.log(movies);
// });


// import { KinopoiskDev } from './node_modules/@openmoviedb/kinopoiskdev_client';
// const kp = new KinopoiskDev('0P4K4P1-5PHMMD0-KXZ1VXP-9MQ1ZV3');

// const {data} = await kp.movie.getById(666);
// console.log(data); //это как мы будем писать код, если она подключится :)

// РАСКОММЕНТИРОВАТЬ!!!!
// const token = '0P4K4P1-5PHMMD0-KXZ1VXP-9MQ1ZV3';
// const headers = {
//     "X-API-KEY": token
// };
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

// ЭТО ПОИСК ПО ПАРАМЕТРАМ,  
// Пока что он выводит фильмы в консоль, внутри этого кода надо прописать вывод на страницу 
// и фильтр фильмы-сериалы
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
    console.log(genreCheckboxes)
    console.log(res);
};

document.querySelector('.section-search__glow-on-hover').addEventListener('click', fetchFilteredMovies);
// ВОТ КОНЕЦ. 

// Фильтрация карточек
// function getSearchParams() {
//     const countries = document.querySelector("#country_select").value.trim();
//     const year_range = document.querySelector("#years-select").value.trim();
//     const genres = Array.from(document.querySelectorAll(".container-input__tag:checked")).map(input => input.nextSibling.textContent.trim());
//     return { countries, year_range, genres };
//     }

  // Функция для отправки запроса на сервер с параметрами фильтрации


// const headers = {
//     "X-API-KEY": token
// };
// async function filterMovies() {
//     const genreCheckboxes = document.querySelectorAll('.container-input__tag[name="genre"]:checked');
//     const yearSelect = document.getElementById('years-select');
//     const countrySelect = document.getElementById('country_select');

//     const genres = Array.from(genreCheckboxes).map(checkbox => checkbox.value);
//     const year = yearSelect.value;
//     const country = countrySelect.value;

//     const queryParams = new URLSearchParams({
//         'genres.name': genres,
//         'year': year,
//         'countries': country,
//         "limit": 1,
//         "page": 1,
//     });
//     try {
//         const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie?${queryParams}`, {
//         },
//         {
//             headers: headers
//         });
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         console.log("Filtered parameters:", { countries, year, genres });
//         const movies = await response.json();
//         return movies.docs;
    
//         } catch (error) {
//         console.error(error);
//         }
//     }
//     document.querySelector('.section-search__glow-on-hover').addEventListener('click', async () => {
//         try {
//             const movies = await filterMovies();
//             console.log(movies);
//         } catch (error) {
//             console.error(error);
//         }
//     });












































































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