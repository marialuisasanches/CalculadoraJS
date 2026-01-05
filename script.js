const temaButton = document.getElementById("tema");
const temaIcon = temaButton.querySelector("img");
const calculadora = document.querySelector(".calculadora");
const display = document.querySelector(".display");
const opcoes = document.querySelector(".opcoes");
const botoes = document.querySelectorAll(".opcoes button");
const nome = document.querySelector("h2 strong");

temaButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  calculadora.classList.toggle("dark");
  nome.classList.toggle("dark");
  display.classList.toggle("dark");
  opcoes.classList.toggle("dark");
  temaButton.classList.toggle("dark");

  botoes.forEach((botao) => {
    botao.classList.toggle("dark");
  });

  if (document.body.classList.contains("dark")) {
    temaIcon.src = "./assets/imgs/sol.png";
    temaIcon.alt = "Modo Noturno";
  } else {
    temaIcon.src = "./assets/imgs/lua.png";
    temaIcon.alt = "Modo Claro";
  }
});
