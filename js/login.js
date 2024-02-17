const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');

const validadeInput = ({target}) => {
    if(target.value.length > 2){
        button.removeAttribute('disabled');
    }
}

input.addEventListener('input', validadeInput);