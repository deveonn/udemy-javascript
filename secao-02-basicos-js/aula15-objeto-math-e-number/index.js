// Math é um objeto que tem propriedades e métodos para constantes e funções matemáticas
let num1 = 9.54578

// Deixando o numero inteiro com o objeto math utilizando o flor(chao) arredonda para baixo

let num2 = Math.floor(num1)
console.log(num2)

// arredondando pra cima, ceil(teto)

let num3 = Math.ceil(num1)
console.log(num3)

// podemos usar o método round() para, arrendondar um número real para um número inteiro mais proximo;

let num4 = Math.round(num1)
console.log(num4)

// Math.max() pode achar dentro de uma sequencia de números o maior valor
// (valor maximo, associando)

console.log(Math.max(2, 3, 45, 10))
// ou se queremos o menor número ...
console.log(Math.min(2, 3, 45, 10))

// Math.random() é um método que retorna um número real aleatório entre
// 0 e 1

const aleatório = Math.random()

console.log(aleatório)

// Usando o random para criar um número entre 10 e 5, podemos usar a seguinete sintaxe:


// Usamos o math.round apenas para arredondar par um número inteiro
let aleatórioCincoDez = Math.round(Math.random() * (10 - 5) + 5)
console.log(aleatórioCincoDez)

//podemos pegar a raiz quadrada de um número usando a seguinte sintaxe:

const raizNum = 9

// * formula para a raiz quadrada usando operadores aritméticos ...
console.log(raizNum ** 0.5)

// ! em JS podemos dividir por 0
console.log(100 / 0)
// ! dividir por zero retorna "Infinity", que também é TRUE!!!

