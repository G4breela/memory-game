const grid = document.querySelector(".grid");

// essa array recebe o mesmo valor que o nome das imagens que vão ficar no front
const characters = [
    'abelinha',
    'cachorrinho',
    'coelinho',
    'gatinho',
    'porquinho',
    'ursinho'
];
// estamos criando elementos div através do js e como parametros vamos ter a tag e a class que o elemento vai receber
const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

// essa função adiciona a class que criamos no css
const reavelCard = ({target}) => {

    // esse if evita que uma carta que já tenha a class receba a classe novamente
    if(target.parentNode.className.includes('reveal-card')){
        return;
    }

    // aqui setamos o elemento, mas selecionamos o pai desse elemento (o card) e adiciona a class
    target.parentNode.classList.add('reveal-card');
};

const createCard = (character) => {
  // então vamos criar um elemento div com a class card
  const card = createElement("div", "card");
  // a mesma coisa aqui, vamos criar um elemento div com a class face front
  const front = createElement("div", "face front");
  // a mesma coisa aqui, vamos criar um elemento div com a class face back
  const back = createElement("div", "face back");

// aqui adicionamos a imagem percorrenco o array e pegando o valor e passando um caminho
  front.style.backgroundImage = `url(../img/${character}.jpg)`;

  // para criar a mesma estrutura que temos no html precisamos adicionar o front e o back dentro da div card
  // utilizando o appendChild();
  card.appendChild(front);
  card.appendChild(back);

    // adicionado um ouvinte para que quando o card for clicado executar uma função
    card.addEventListener('click', reavelCard);

  return card;
};

// função que carrega o jogo
const loadGame = () => {

    // um array que vai espalhar os personagens do array de personagens duplicando
    const duplicateCharacters = [...characters, ...characters];
    // embaralhando as cartas com o array duplicado utilizando o sort() com uma função que retorna um valor de math.random() - 0.5
    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

    // pega o array de personagens e para cada personagem, ou seja, cada item
    shuffledArray.forEach((character) => {
        // a função createCard é executada com um personagem
        const card = createCard(character);
        // e adiciona o card criado dentro do nosso elementro grid de card 
        grid.appendChild(card);
    });
}

loadGame();