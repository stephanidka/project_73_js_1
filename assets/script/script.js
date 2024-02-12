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