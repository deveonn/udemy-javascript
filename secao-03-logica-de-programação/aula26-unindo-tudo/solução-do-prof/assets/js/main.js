// Procurar não poluir o escopo global, gravar as coisas dentro de uma função é uma boa pratica

const form = document.querySelector('#formulario');

form.addEventListener('submit', function (evento) {
  evento.preventDefault()
  // entender melhor isso ...
  const inputPeso =  evento.target.querySelector('#peso')
  const inputAltura = evento.target.querySelector('#altura')
  
  const peso = Number(inputPeso.value)
  const altura = Number(inputAltura.value)

  // * Aqui estamos usando o seguinte raciocinio, a const peso tem que ser um número, pois definimos isso com Number(), então toda vez que peso for um número, ele será true consequemente, mas se o usuario digitar algo que seja um texto, a const peso terá um valor NaN, que para o JS pode ser falso, então se peso for diferente de true, ele executa essa condicional abaixo!
  if (!peso) {
    setResultado('Peso inválido!', false);
    return;
  }

  if (!altura) {
    setResultado('Altura inválida!', false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);
  const msg = `Seu IMC é ${imc} (${nivelImc})`

  setResultado(msg, true)
});

function getNivelImc(imc) {
  const nivel = [
    'Abaixo do peso',
    'Peso normal', 
    'Sobrepeso', 
    'Obesidade grau 1', 
    'Obesidade grau 2', 
    'Obesidade grau 3'
  ]

  // Aqui não precisamos usar else if, por que: se dentro de uma função, ela encontra o return, nada depois do return é executado!

  // Outra coisa, se eu tenho apenas uma linha de código no if, não preciso usar chaves tbm, só uso quando for necessario escrever mais de uma linha!

  if (imc >= 39.9) return nivel[5]
  if (imc >= 34.9) return nivel[4]
  if (imc >= 29.9) return nivel[3]
  if (imc >= 24.9) return nivel[2]
  if (imc >= 18.5) return nivel[1]
  if (imc >= 18.5) return nivel[0]
}

function getImc(peso, altura) {
  const imc = peso / altura ** 2
  return imc.toFixed(2)

}

function criaP() {
  const p = document.createElement('p');
  return p;
}

// ? Só pra lembrar como usar os parâmetros da função, eles são como placeholders para fazer algo, esse algo nós definimos dentro da função, aqui em baixo um exemplo disso, mas no nosso caso, talvez praticar mais ajude a reforçar isso...

function setResultado(msg, isValid) {
  const resultado =  document.querySelector('#resultado');
  resultado.innerHTML = '';
  const p = criaP();

  if (isValid) {
    p.classList.add('paragrafo-resultado')
  } else {
    p.classList.add('bad');
  }
  
  p.innerText = msg
  resultado.appendChild(p)
}