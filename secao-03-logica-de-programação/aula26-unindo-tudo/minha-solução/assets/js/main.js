const form = document.querySelector("#form");
const pesotxt = document.querySelector("#peso");
const alturatxt = document.querySelector("#altura");

// make form not do an submit for server etc...
form.addEventListener("submit", function (e) {
  e.preventDefault();
});

function setResultado() {
  const resultado = document.querySelector("#resultado");
  const peso = pesotxt.value;
  const altura = alturatxt.value;
  const imc = peso / (altura * altura);

  if (peso === "") {
    resultado.innerHTML = `<p>Peso invalido!`;
  } else if (altura === "") {
    resultado.innerHTML = `<p>Altura invalida!`;
  } else if (imc <= 18.4) {
    resultado.innerHTML = `<p id="abaixo-peso" class="res"> Seu IMC é ${imc.toFixed(
      2
    )}, você precisa ganhar uns quilos.</p>`;
  } else if (imc >= 18.5 && imc <= 24.9) {
    resultado.innerHTML = `<p id="normal-peso" class="res"> Seu IMC é ${imc.toFixed(
      2
    )}, você está com o peso ideal.</p>`;
  } else if (imc >= 25 && imc <= 29.9) {
    resultado.innerHTML = `<p id="sobrepeso" class="res"> Seu IMC é ${imc.toFixed(
      2
    )}, está com sobrepeso, cuidado...</p>`;
  } else if (imc >= 30 && imc <= 34.9) {
    resultado.innerHTML = `<p id="grau1" class="res"> Seu IMC é ${imc.toFixed(
      2
    )},  está com obesidade grau 1, cuidado...</p>`;
  } else if (imc >= 35 && imc <= 39.9) {
    resultado.innerHTML = `<p id="grau2" class="res"> Seu IMC é ${imc.toFixed(
      2
    )},  está com obesidade grau 2, cuidado...</p>`;
  } else if (imc > 40) {
    resultado.innerHTML = `<p id="grau3" class="res"> Seu IMC é ${imc.toFixed(
      2
    )},  está com obesidade grau 3, cuidado...</p>`;
  }
}
