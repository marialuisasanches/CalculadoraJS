const temaButton = document.getElementById("tema");
const temaIcon = temaButton.querySelector("img");
const calculadora = document.querySelector(".calculadora");
const display = document.querySelector(".display");
const opcoes = document.querySelector(".opcoes");
const botoes = document.querySelectorAll(".opcoes button");
const nome = document.querySelector("h2 strong");

temaButton.addEventListener("click", () => {
  document.body.classList.toggle("light");
  calculadora.classList.toggle("light");
  nome.classList.toggle("light");
  display.classList.toggle("light");
  opcoes.classList.toggle("light");
  temaButton.classList.toggle("light");

  botoes.forEach((botao) => {
    botao.classList.toggle("light");
  });

  if (document.body.classList.contains("light")) {
    temaIcon.src = "./assets/imgs/lua.png";
    temaIcon.alt = "Modo Noturno";
  } else {
    temaIcon.src = "./assets/imgs/sol.png";
    temaIcon.alt = "Modo Claro";
  }
});
