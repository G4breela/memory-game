const grid = document.querySelector(".grid");

// essa array recebe o mesmo valor que o nome das imagens que vão ficar no front
const characters = [
  "bee",
  "puppy",
  "cow",
  "cat",
  "pig",
  "bear",
];
// estamos criando elementos div através do js e como parametros vamos ter a tag e a class que o elemento vai receber
const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

let firstCard = "";
let secondCard = "";

const checkEndGame = () => {
  // verificando todos os elementos que possuem a class disabled-cards
  const disabledCards = document.querySelectorAll(".disabled-card");

  // se o tamanho for igual a 12 acaba o jogo
  if (disabledCards.length === 12) {
    alert("Parabéns, você conseguiu!");
  }
};

const checkCards = () => {
  // pegamos o atributo que foi adicionado na função de criar o card
  const firstCharacter = firstCard.getAttribute("data-character");
  const secondCharacter = secondCard.getAttribute("data-character");

  // verifica se são iguais
  if (firstCharacter === secondCharacter) {
    // se for o card é desabilitado com a class do css
    firstCard.firstChild.classList.add("disabled-card");
    secondCard.firstChild.classList.add("disabled-card");

    // e remove o valor da variavel para ser possivel clicar novamente
    firstCard = "";
    secondCard = "";

    checkEndGame();
  } else {
    // se as cartas não forem iguais remove a classe que revela em 500ms
    setTimeout(() => {
      firstCard.classList.remove("reveal-card");
      secondCard.classList.remove("reveal-card");

      // aqui deixamos o valor vazio novamente para ser possivel clicar de novo
      firstCard = "";
      secondCard = "";
    }, 500);
  }
};

// essa função adiciona a class que criamos no css
const reavelCard = ({ target }) => {
  // esse if evita que uma carta que já tenha a class receba a classe novamente
  if (target.parentNode.className.includes("reveal-card")) {
    return;
  }

  // verifica se a primeira carta está vazia
  if (firstCard == "") {
    // aqui setamos o elemento, mas selecionamos o pai desse elemento (o card) e adiciona a class
    target.parentNode.classList.add("reveal-card");
    // adiciona o pai do elemento a variavel
    firstCard = target.parentNode;
  } else if (secondCard == "") {
    target.parentNode.classList.add("reveal-card");
    secondCard = target.parentNode;

    checkCards();
  }
};

const createCard = (character) => {
  // então vamos criar um elemento div com a class card
  const card = createElement("div", "card");
  // a mesma coisa aqui, vamos criar um elemento div com a class face front
  const front = createElement("div", "face front");
  // a mesma coisa aqui, vamos criar um elemento div com a class face back
  const back = createElement("div", "face back");

  // criei um elemento que vai ser o nome do personagem
  const name = createElement("p", "name");

  // aqui adicionamos a imagem percorrenco o array e pegando o valor e passando um caminho
  front.style.backgroundImage = `url(../img/${character}.jpg)`;
  // escreve o nome do personagem
  name.innerText = `${character}`;

  // para criar a mesma estrutura que temos no html precisamos adicionar o front e o back dentro da div card
  // utilizando o appendChild();
  card.appendChild(front);
  card.appendChild(back);
  // adiciono como elemento filho do front
  front.appendChild(name);

  // adicionado um ouvinte para que quando o card for clicado executar uma função
  card.addEventListener("click", reavelCard);

  // adicionando um atributo com o valor do nome do personagem
  card.setAttribute("data-character", character);

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
};

loadGame();
