// A operação ternaria funciona com condição|true|false
// *                           deveFazer ? sim : não

// Imagine que temos um site onde os usuarios ganham pontos por algum sistema de pontuação.
// Com determianda pontuação, ele ganha privilegios vip, mas para isso, uma operção ternaria avalia se,
// ele tem direito ou não...

// O que fariamos com uma condicional, nesse caso, podemos fazer em uma linha ...

// if (user >= 1000) {
//     console.log('VIP')
// } else {
//     console.log('Normal')
// }

const user = 999

// dependendo do tamanho da condição pode ser necessario usar parenteses ...
const tipoUsuario = user >= 1000 ? 'VIP' : 'Normal'

console.log(tipoUsuario)