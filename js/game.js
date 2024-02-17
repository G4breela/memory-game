const grid = document.querySelector('.grid');

const createCard = () => {
    // estamos criando elementos div através do js
    const card = document.createElement('div');
    const front = document.createElement('div');
    const back = document.createElement('div');

    // aqui adicionamos as classes que existem na div já existente
    card.className = 'card';
    front.className = 'face front';
    back.className = 'face back';

    // para criar a mesma estrutura que temos no html precisamos adicionar o front e o back dentro da div card
    // utilizando o appendChild();
    card.appendChild(front);
    card.appendChild(back);


    // aqui vamos adicionar o card com os seus elementos dentro do grid conforme a card já existente
    grid.appendChild(card);
};

createCard();