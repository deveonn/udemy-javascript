// ? Funções Avançado

// * Exemplos de como declarar uma função

// function HelloWorld() {
//     console.log('Hello world')
// }
// HelloWorld()

/* // * First Class Objects

    As funções dentro do JS são First Class Object
    Ou seja, são dados assim como variáveis

    Isso permite que elas sejam armazenadas em variáveis
    E também permite que uma função possa ser parâmetro de outra função

    Exemplo:

*/

const souUmDado = function() {
    console.log('Estou guardando uma String')
}

function executaFunção(função) {
    função()
}

// executaFunção(souUmDado)


// ? Arrow Functions (ES6)

const arrowFunction = () => {
    console.log('Sou uma arrow function!')
}

// arrowFunction()

// ? Dentro de um Objeto eu posso ter uma função

// ! Isso aqui pode ser útil pra caralho!!
const pessoa = {
    falar() {
        console.log('Estou falando...')
    },

    andar() {
        console.log('Estou andando')
    },

    olhar() {
        console.log('Estou olhando')
    }
}

pessoa.falar()
pessoa.andar()
pessoa.olhar()
