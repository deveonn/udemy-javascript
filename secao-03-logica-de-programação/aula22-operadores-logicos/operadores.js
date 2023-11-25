// ? Operadores lógicos são usados para fazer mais de uma comparação ...

/** Operadores Lógicos
 * && -> AND -> E -> Todas tem que ser verdadeiras!!!!!
 * || -> OR -> OU -> Apenas uma precisa ser true
 * !-> NOT -> NÃO(diferente) -> Se é true, retorna false, se é false, retorna true
 * 
 */

//----------------------------------------------------------------------//
// TODO &&
// Para retonar true, o && tem que ter true nas duas comparações
console.log(true && true)

// ? Podemos usar mais de um operador assim, com varias comparações, mas se só uma delas for false, a expressão retornara false:
console.log(true && false && true && false && false)
// false

console.log(true && true && true && true && false)
// true

//----------------------------------------------------------------------//
// TODO ||
// Para retormar true, o || tem que ter apenas um true nas duas comparações
console.log(true || false)
console.log(false || true)

// Retorna false quando TODAS as comparações são false
console.log(false || false)

// Mesmo só uma condição sedo true, o operado OU vai retornar true
console.log(false || false || false || false || true)
// true

// TODO !

// ? Ele inverte o bolean de qualquer coisa ...

console.log(!false)
// isso vai ser true

console.log(!true)
// isso vai ser false

// da pra usar mais de uma vez
console.log(!!true)
// true
console.log(!!!true)
// false