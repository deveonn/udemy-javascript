// TODO a partir do momento em que uma expressão do JS, que usa varios operadores &&, encontra false, ela para de ser executada

//          ---------------------------> para aqui
console.log(true && true && true && true && false && true && true && true)
// Depois de false, nesse caso, nada mais será executado ...

// ! Em JS, tudo pode ser avaliado como true ou false ...
// ? Podemos fazer comparações assim

console.log('João' && 0 && 'Maria')
// Retorna 0

// * PQ retornou 0 ? Pq assim que o operador && acha um valor falsy, ele para de executar a expressão e retorma esse falsy value!!!!

console.log('João' && '' && 'Maria')
// retorna '' (string vazia)

// TODO existem valores que são false pro JS, que se o opertador && acha na expressão, é isso que ele retorna(os falsy values), os valores não literais false:

// false(literal)
// NaN
// 0
// (string vazia) ' ' ou " " ou ` `
// null
// undefined

// TODO Podemos usar essa lógica do operador && para executar tarefas dentro do nosso código de maneira mais clean, perfomática, etc

function falaOi() {
    return 'Oi'
}


// como é true, o && passa direto e executa a função falaOi()
let vaiExecutar = true
console.log(vaiExecutar && falaOi())

// * Diferente do operador &&, o operador || para de continuar a expressão quando acha um valor true, assim como o operador && quando acha false !!!

console.log(0 || false || null || 'Luiz Otávio' || true)
// 'Luiz Otávio'

// Pegadinha do malandro HAA ye ye...
const a = 0
const b = null
const c = 'false'
const d = false
const e = NaN
console.log(a || b || c || d || e)

// ! E se todos os valores dentro de uma expressão, que usa apenas ||, forem false, ela vai retornar o ultimo valor...

const aA= 0
const bB = null
const cC = false
const dD= false
const eE = NaN
console.log(aA || bB || cC|| dD || eE)
