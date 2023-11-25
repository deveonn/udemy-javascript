// ? Parecido com o for que vimos antes nesse curso, ele tem uma sintaxe um pouco mais enxuta:
// ? Ele vai ITERAR um array/objeto
// * ITERAR: percorrer todo o objeto/array etc.

const frutas = ['Pera', 'Maçã', 'Uva']

// * O que fariamos com for assim:

// for (let i = 0; frutas.length > i; i++ ) {
//     const name = frutas[i]
//     console.log(name)
// }

// * Podemos fazer assim:

for( let i in frutas ) {
    console.log(frutas[i])
}

// * Declaramos na variavel let pra ser nosso "contador", mas aqui não definimos uma condição, útil pra quando precisamos apenas percorrer um array

// * Ou seja, o FOR IN lê os indices ou chaves do objeto/array/vetor ... não se esqueça disso.

// * Exemplo de for in iterando um objeto:
const pessoa = {
    nome:'Émerson',
    sobrenome: 'Vargas',
    idade: 23
};

for(let chave in pessoa) {
    console.log(chave)
}

// * Mas e se eu quiser pegar informações de um objeto de forma mais dinâmica???
// * Antes precisamos saber de uma coisa:
// * Podemos acessar as informações dentro de um objeto das seguintes maneiras:

//notação de ponto
console.log(pessoa.nome)
// passando entre colchetes e parenteses o nome da propriedade
console.log(pessoa['nome'])

// * Quando vamos pegar uma propriedade de forma dinâmica, usamos a segunda opção acima, exemplo:

for(let chave in pessoa) {
    console.log(chave, pessoa[chave])
}

// * Resultado:
//nome Émerson
//sobrenome Vargas
//idade 23

// * Fazendo de forma dinamica, conseguimos criar uma repetição usando as propriedades de um objeto.