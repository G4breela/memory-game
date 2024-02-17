const grid = document.querySelector('.grid');

 // estamos criando elementos div através do js e como parametros vamos ter a tag e a class que o elemento vai receber
const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const createCard = () => {
   // então vamos criar um elemento div com a class card
    const card = createElement('div', 'card');

    // a mesma coisa aqui, vamos criar um elemento div com a class face front
    const front = createElement('div', 'face front');

    // a mesma coisa aqui, vamos criar um elemento div com a class face back
    const back = createElement('div', 'face back');

    // para criar a mesma estrutura que temos no html precisamos adicionar o front e o back dentro da div card
    // utilizando o appendChild();
    card.appendChild(front);
    card.appendChild(back);

    return card;
};