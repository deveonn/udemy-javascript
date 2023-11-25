let num = 9;

if (num >= 0 && num <= 10) {
    console.log('Está entre 0 e 10.')
} else {
    console.log('Nada.')
}

// ? O interessante das condicionais, é que elas seguem uma lógica parecida com o operador ou (||), onde se encontrarem um valor true no meio do condicional, param de executar todo o resto...

num = 25

if (num >= 0 && num <= 10) {
    console.log('Está entre 0 e 10.')
} else if (1 === 1){ // -----> isso aqui meio que buga o encadeamento ...
    console.log('LITERAL')
} else if(num >= 10 && num <= 20) {
    console.log('Entre 10 e 20 ')
} else if (num >= 20 && num <= 30) {
    console.log('Entre 20 e 30')
}

console.log('Resto da aplicação depois ...')