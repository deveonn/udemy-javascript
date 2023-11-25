//  Tudo referente a return 
// Retorna um valor
// TERMINA uma função

function sum(a, b) {
  return a+b
}

// ? PUTA BAGULHO COMPLICADO


function falaFrase(começo) {
  function falaResto(resto) {
    return começo + ' ' + resto
  }

  return falaResto;
}

const inicio = falaFrase('Olá');

console.log(inicio('Mundo!'));


// * Explicação:

/*
 ? Nessa função, temos uma função interna, e essa função interna é retornada;
 ? Repare que, estamos retornando a função interna, sem executar ela;
 ? Ou seja, o retorno da função principal retorna uma função sem executar essa função interna;
 ? Como o retorno da função é uma função não executada, isso possibilita:
    - Chamar a variável início() como se fosse uma função, e ela recebe, neste caso,
      o 'resto' da frase;
      
 */