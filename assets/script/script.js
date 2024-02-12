const findButton = document.querySelector(".findButton")

function getObj(){
    const token = '0P4K4P1-5PHMMD0-KXZ1VXP-9MQ1ZV3';
    let movieTitle = 'Пятый элемент';
    return fetch(`https://api.kinopoisk.dev/v1.4/movie/search?keyword=${encodeURIComponent(movieTitle)}`, {
        headers: {
            'X-API-KEY': token,
            'Content-Type': 'application/json',
        }
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error('There was a problem with your fetch operation:', error);
    });
}

    document.querySelector('.findButton').addEventListener('click', getObj);

























































































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