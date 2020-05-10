const input = document.querySelector('input');
const message = document.getElementById('display');
const form = document.querySelector('form');

function displayMessage(e) {
    e.preventDefault();
    message.textContent = input.value;
    input.value = '';
};

form.addEventListener('submit', displayMessage);