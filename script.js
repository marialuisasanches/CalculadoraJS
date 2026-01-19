//Troca de temas, claro/escuro
const temaButton = document.getElementById("tema");
const temaIcon = temaButton.querySelector("img");
const calculadora = document.querySelector(".calculadora"); //buscar um elemnto para manipular queryselector
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

let calculo = [];
let resultadoMostrado = false;
let historico = [];

function escolherNumeros(numero) {
  if (resultadoMostrado) {
    calculo = [];
    resultadoMostrado = false;
  }

  const ultimo = calculo[calculo.length - 1];

  if (calculo.length == 0 || ultimo.includes(" ")) {
    calculo.push(numero);
  } else {
    calculo[calculo.length - 1] += numero;
  }

  atualizarDisplay();
}

function escolherOperador(operacao) {
  resultadoMostrado = false;
  const ultimo = calculo[calculo.length - 1];
  if (calculo.length == 0 || ultimo.includes(" ")) {
    return;
  } else {
    calculo.push(" " + operacao + " ");
    atualizarDisplay();
  }
}

function simboloDisplay(operacao) {
  switch (operacao) {
    case "*":
      return "×";
    case "/":
      return "÷";
    default:
      return operacao;
  }
}

function atualizarDisplay() {
  let texto = calculo
    .map((item) => {
      if (item.trim() === "*") return " × ";
      if (item.trim() === "/") return " ÷ ";
      return item;
    })
    .join("");

  display.value = texto;
  ajustarFonte();
}

function ajustarFonte() {
  const tamanho = display.value.length;

  display.style.fontSize = "2.5rem";

  if (tamanho > 9) {
    display.style.fontSize = "1.8rem";
  }

  if (tamanho > 12) {
    display.scrollLeft = display.scrollWidth;
  }
}

function clr() {
  calculo.length = 0;
  atualizarDisplay();
}

function del() {
  calculo.pop();
  atualizarDisplay();
}

function ponto() {
  const ultimo = calculo[calculo.length - 1];

  if (calculo.length == 0 || ultimo.includes(" ")) {
    calculo.push("0.");
    atualizarDisplay();
    return;
  }

  if (ultimo.includes(".")) {
    return;
  } else {
    calculo[calculo.length - 1] += ".";
    atualizarDisplay();
  }
}

function calcular() {
  if (calculo.length === 0) return;

  try {
    const expressao = calculo.join("");
    const res = eval(expressao);

    calculo = [res.toString()];
    resultadoMostrado = true;
    historico.push(`${expressao} = ${res}`);
    atualizarDisplay();
  } catch (error) {
    display.value = "Erro";
    calculo = [];
  }
  atualizarDisplay();
}

function mostrarHistorico() {
  if (historico.length === 0) {
    display.value = "Sem histórico";
    return;
  }
  display.value = historico.join(" | ");

  resultadoMostrado = true;
  calculo = [];

  ajustarFonte();
}
