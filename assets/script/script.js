const fileName = 'search_licon 1.png';
const encodedFileName = encodeURIComponent(fileName);
const url = `http://127.0.0.1:5500/assets/icons/${encodedFileName}`; // эта фигня убирает какие-то лишние пробелы



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
    console.log(genreCheckboxes)
    console.log(res);
};

document.querySelector('.section-search__glow-on-hover').addEventListener('click', fetchFilteredMovies);

// ВСЁ, КОНЕЦ. 

































































































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