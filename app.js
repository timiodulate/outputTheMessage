const input = document.querySelector('input');
const message = document.getElementById('display');
const button = document.getElementById('btn');
const warning = document.querySelector('h5');

function displayMessage() {
    if(input.value === ''){
        warning.classList.add('show');

        setTimeout(() => {
            warning.classList.remove('show')
        }, 1000);
    } else {
        message.textContent = input.value;
        input.value = '';
    }   
};

button.addEventListener('click', displayMessage);