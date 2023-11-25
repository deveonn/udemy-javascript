// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// São Case-sensitive
// Não pode modificar o valor de uma constante
// NÃO UTILIZE VAR, UTILIZE CONST.

// diferente de let, não podemos declarar uma constante sem nada

// const nome; (DA ERRO)

// jeito certo

const nome = 'João'
console.log(nome)

const primeiroNumero = 5
const segundoNumero = 10
const resultado = primeiroNumero * segundoNumero
const resultadoDuplicado = resultado * 2
const resultadoTriplicado = resultado * 3

console.log(typeof(primeiroNumero))

// Pra finalizar, CONSTANTES NÃO PODEM SER ALTERADAS AO LONGO DO CÓDIGO