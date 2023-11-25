// parametros de funções em JS

// function função() {
//     console.log('Do something.')
// }

// função()

// ! SOMENTE PARA FUNÇÕES LITERAIS (functions)

// quando declaramos uma função literal sem parâmetros, mas por alguma razão
// passamos argumentos, podemos acessar esses valores com pela variável arguments

// ? repare que, podemos acessar argumentos em parâmetros de função através do objeto 'arguments'

function funçãoSemParâmetros() {
    console.log(arguments)
}

funçãoSemParâmetros('something', 1, 2, 3, 4);



// TODO:(calculadora) aqui deu uma viajada e criei uma função que calcula tudo que passamos pra ela nesse conceito:

const calculate = (operador, increment, ...numbers) => {
  for (let number of numbers)
    switch (operador) {
      case "+":
        increment += number;
        break;
      case "-":
        increment -= number;
        break;
      case '*':
        increment *= number
        break;
      case '/':
        increment /= number
        break;
      case '%':
        increment %= number
        break;
    }

  console.log(increment);
}

calculate("+", 1, 20, 30, 40, 50);


// ! Lembre-se, arrow functions não tem a variável arguments !!!!
// * Demais tipos de funções tem arguments !!!!!

// ? MAS, SE PRECISAR USAR ISSO EM ARROW FUNCTIONS, PODE USER O REST OPERATOR!

const iterateSomething = (...args) => {
  console.log(args);
}

iterateSomething(1, 3, 11, 20 ,28, 31, 45, 100)


// * SEMPRE QUE PRECISAR TRABALHAR COM PARÂMETROS ONDE NEM TODOS VÃO SER SEMPRE DEFINIDOS DE CERTO MODO
// * USE ESSES CONCEITOS DE FUNÇÃO !!!