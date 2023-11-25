// Para exemplificar, vamos declarar duas variaveis, uma let e uma var:

// var nome = "Luiz";
// let nome2 = "Luiz";

//* Var permite ser declarada novamente, Let não, apenas reatribuida.
// let nome = 'Otavio';
// var nome = "Otavio";

// Repare em outra detalhe da variavel let:

// const isTrue = true;

// Outro escopo que tem uma outra variavel, mas com o mesmo nome de outra variavel em outro escopo ...
// if (isTrue) {
//   let nome = "Otávio";
//   console.log(nome, nome2)

//   if (isTrue) {
//     let nome = "Outra coisa";
//     console.log(nome, nome2);
//   }
// }

// TODO Let tem escopo de bloco, por isso podemos declarar uma let com o mesmo nome em outro escopo, dentro do código!
// bloco = {... bloco}

// TODO UM detalhe desse código, é que se damos um console log numa variavel que não está dentro do escopo, ele procura uma variavel no escopo 'antecessor' até acha-lá, isso irá acontecer até chegar no escopo global ...

//? Var tem escopo de função, ou seja, quando declarada dentro de uma função, não pode ser acessada por outras coisas de fora do escopo dessa função ...

// ? Se tivermos uma CONDICIONAL dentro do bloco da função, por exemplo, ainda podemos usar uma var em outro bloco, desde que esse outro bloco esteja dentro do escopo da função !!!!!!!

function falaOi() {
    var nome = 'Oi'
}

console.log(nome)

// TODO Usando var, acontece uma coisa que chamamos de HOISTING, isso significa que, independente de onde estejam declarada essa var(inicio, meio, fim, etc) pro moto do javascript ela será levada para o topo de seu escopo e será criada primeiro ...