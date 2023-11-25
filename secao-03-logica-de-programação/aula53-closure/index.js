// ! Closure
// ? Closure é o fecho da função, ou seja, onde ela acaba, fecha o escopo ...

// ? uma função que retorna outra função é usada para criar uma closure ...
function criaFuncao(nome) {

  return function() {
    return nome
  }
}
//                         aqui
const funcao = criaFuncao('Sauro') // * <--aqui fica o closure dessa função
 
// ? chamamos a variável, que atribuímos a função com closure, como uma função ...
console.log(funcao()) 