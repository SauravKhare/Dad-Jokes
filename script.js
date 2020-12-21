const jokeP = document.querySelector('.joke p');
const jokeButton = document.querySelector('.btn');

const buttonText = [
    'Ugh.',
    '🤦🏻‍♂️',
    'omg dad.',
    'you are the worst',
    'seriously',
    'stop it.',
    'please stop',
    'that was the worst one',
  ];

async function fetchJoke() {
    const response = await fetch('https://icanhazdadjoke.com', {
        headers: {
            Accept: 'application/json',
        },
    });

    const data = await response.json();
    return data;
}

async function handleClick(e) {
    const { joke } = await fetchJoke();
    jokeP.textContent = joke;
    jokeButton.textContent = randomItemFromArray(buttonText, jokeButton.textContent);
}

function randomItemFromArray(arr, notItem) {
    const item = arr[Math.floor(Math.random() * arr.length)];
    if (item === notItem) {
        randomItemFromArray(arr, notItem);
    }
    return item;
}


jokeButton.addEventListener('click', handleClick);