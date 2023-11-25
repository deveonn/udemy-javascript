/**
 * Primitivos  - string, number, boolean, undefined, null (bigint e symbol)
 * --VALORES COPIADOS--
 */

// ? Sabemos que para acessar indices, tanto de string como de arrays, fazemos isso:

// ?        0123456
let nome = 'Émerson'
console.log(nome[0])

// TODO mas se eu tento reatribuir apenas para um indice da string, não fuciona, exemplo:

nome[0] = 'A'
console.log(nome[0], nome)

// ? PQ não deu certo? Simples, STRINGS são IMUTÁVEIS !!!

// TODO toda vez que, eu atribuo uma variavel a outra, crio uma cópia dela, exemplo:

let a = 'A'
let b = a //Cópia
console.log(a, b)

// Vou trocar o valor de a, mas b bão será afetado:
a = 'Outra coisa'
console.log(a, b)

a = null
b = null

// ! Dados de refência são mutaveis ...(Arrays, Objects, Functions) --VALORES POR REFERÊCIA--
// ? Chamamos de referencia, pois quando tentamos atribuir para uma variavel, criamos apenas uma refencia que aponta pro mesmo lugar na memoria, por isso os efeitos abaixo:

// Aqui, não é cópia, pois isso aponta para o mesmo lugar na memória
// PQ disso? Pq são valores de refencia ...
a = [1, 2, 3]
b = a 
console.log(a, b)

// TODO se eu adicionar uma coisa pra variavel 'a', 'b' será afetada:
// ? 'a' e 'b' apontam pro mesmo lugar na memoria!

a.push(4)
console.log(a, b)

// ! Mas e se eu precisar copiar mesmo, não apenas referenciar, como faço???
// * Aí a gente usa o ... (spread operator)

let c = [1, 2, 3]
let d = [...c]

c.push(4)

console.log(c, d)

// ! o spread operator também pode copiar objetos ...

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};


// mudei a const pessoa, logo a const pessoa2 também será afetada ...
pessoa.nome = 'João'
const pessoa2 = pessoa
console.log(pessoa2)

// TODO Mas usando o spread operator, podemos copiar, em vez de apenas referenciar:

const pessoa3 = {...pessoa}

pessoa.nome = 'Jonathan'
console.log(pessoa, pessoa3)