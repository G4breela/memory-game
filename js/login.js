const input = document.querySelector(".login-input");
const button = document.querySelector(".login-button");
const form = document.querySelector(".login-form");

// função do evento no parametro fazemos referencia ao objeto
const validadeInput = ({ target }) => {
  // se o tamanho do valor do input for maior que 2
  if (target.value.length > 2) {
    // removemos o atributo disable do botão
    button.removeAttribute("disabled");
    // para a execução e pula direto para o final da função neste caso
    return;
  }
  // se não for maior adicionamos o atributo disable novamente ao botão sem precisar usar o else
  button.setAttribute("disabled", "");
};

const handleSubmit = (e) => {
  // bloqueando o envio do formulário
  e.preventDefault();
  // salvando o valor do input no localstorage do browser com a chave player
  localStorage.setItem("player", input.value);
  // redirecionando o usuário para a página do game
  window.location = "pages/game.html";
};

// adicionando o ouvinte no input para excecutar a função
input.addEventListener("input", validadeInput);

// adicionando o ouvinte no formulario para executar a função
form.addEventListener("submit", handleSubmit);
