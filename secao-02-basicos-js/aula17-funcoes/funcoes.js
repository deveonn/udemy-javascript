// Um trecho de código que executa algo quando acionado ...

// ? Para criar uma função podemos apenas escrever function e passar algumas informações:

// TODO dentro do parenteses temos parâmetros da função ...
// TODO usamos para passar coisas, como se fossem variaveis, e irão ser usados posteriomente recebendo algum tipo de dado...

function saudação(nome, idade, profissão) {
  console.log(
    `Olá ${nome}! Sua idade é ${idade}, e você trabalha com ${profissão}`
  );
}

saudação("Émerson", 18, "Programação"); // temos que chamar a função, para que ela seja executada!

// Por padrão funções não retornam nada, por isso esse console.log, vai exibir undefined
// * const variavel = saudação('John')
// * console.log(variavel)
// * undefined

// TODO Quando pedimos para o console.log exibir uma função que está dentro de uma constante, ele vai apenas exibir o que ela RETORNA!!!

function saudaçãoReturn(nome) {
  console.log(`Olá ${nome}`);
  return "Essa função retorna uma string...";
}

const variavel = saudaçãoReturn("Maria");
console.log(variavel);

// ? Abaixo um exemplo de como podemos usar funções e seus parâmetros.
// ? Os parametros são como variaveis que criamos ...
// TODO depois do RETURN, nada mais é executado, então use apenas no fim da função!

function somaUndefined(x, y) {
  const resultado = x + y;
  return resultado;
}

console.log(somaUndefined());
// null + null = NaN

// ? Podemos declarar funções, com parâmetros que recebem valor inicialmente...

function somaDefined(x = 5, y = 5) {
  const resultado = x + y;
  return resultado;
}

// ! Repare que não dei nenhum outro valor pra função aqui, mas ela vai executar uma soma, pois recebeu esses valores quando a função foi declarada acima!!!
console.log(somaDefined());

// TODO Podemos jogar uma função dentro de uma variável, o que chamamos de FUNÇÃO ANONIMA!

// ! Neste caso, o ponto virgula no final do bloco da função é OBRIGATORIO!!!
const raiz = function (n) {
  return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

// ? Podemos também, usar outro tipo de função mais atual chamada ARROW FUNCTION!!!!!!!!!
// TODO são mais simplificadas, aprenda bem a usar ...
// TODO olha como é simplificada!

const raizComArrow = (n) => n ** 0.5;

console.log(raizComArrow(9));
console.log(raizComArrow(16));
console.log(raizComArrow(25));

function myFunction(str) {
  str = "abcdefg";
  sliced = str.slice(-3);
  return sliced;
}

console.log(myFunction())