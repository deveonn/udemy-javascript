// Tirar um valor primitivo ou uma estrutura de dados de dentro de outra estrutura
// Podemos usa-lá para retirar coisas de um array/objeto através das sintaxes abaixo.

// * O que fica do lado esquerdo é a desestruturação

// let a = "A";
// let b = "B";
// let c = "C";

// * Destruturação
// [a, b, c] = [1, 2, 3];

// console.log(a, b, c);

const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// ? Quando fazemos atribuição via desestruturação, pra duas variaveisque declaramos na atribuição mesmo, e atribuimos para duas variaveis um array por exemplo, automaticamente, cada varivel vai ganhar o que está no indice 0, 1, 2 etc ... respectivamente:

// ? Exemplo:

// const [primeiroNumero, segundoNumero, ...resto] = numeros
// console.log(primeiroNumero, segundoNumero)

// ? Para pegar o resto do que não pegamos via desetruturação, podemos usar o spread operator ou rest operador(seu nome muda de acordo com o contexto), e escrever o nome da variavel que vai receber o resto!

// console.log(resto)

// ? Podemos também, pular valores declarando nada pra desestruturação, o que nos permite pegar valores pulando outros:

// * repare que deixamos um "espaço vazio", para pular o indice dentro do array de números ...
const [um, , tres, , cinco] = numeros;
console.log(um, tres, cinco);


// * Trabalhando com arrays dentro de arrays:

//                      0         1          2       
//                   0  1  2    0  1  2    0  1  2    
const numArrays = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

// Para acessar uma informação de um array, que está dentro de outro array, utilizamos a seguinte sintaxe:

// primero o array de numeros que queremos
// depois o que queremos do array que está dentro de outro array

console.log(numArrays[1][2])

// * Fazemos a mesma coisa com desestruturação desse jeito ...

// ! Maneira mais complexa de usar desestruturação ...
const[ , [ , , seis ]] = numArrays
console.log(seis)

// TODO esta ultima sintaxe, deixa as coisas mais complexas, talvez desnessariamente, procure usar desetruturação nomeando cada coisa, para que fique de melhor entendimento, algo mais ou menos assim:

const numArrays2 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

// ! maneira mais clara de usar uma destruturação ...
const [firstList, secondList,thirdyLsit ] = numArrays2

// preciso apenas da primeira lista
console.log(firstList[0])