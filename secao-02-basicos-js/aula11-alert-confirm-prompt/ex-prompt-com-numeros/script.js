n1 = prompt('Digite um valor:')
n2 = prompt('Digite outro:')

const soma = Number(n1) + Number(n2)

// Código refatorado
escreverSoma = document.getElementById('soma')
.innerText = `O resultado da soma é ${soma}.`

alert(`O resultado da soma foi ${soma}.`)