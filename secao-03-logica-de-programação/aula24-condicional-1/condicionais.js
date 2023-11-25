// Cria fluxos situacionais dentro da aplicação ...

const hora =  20

if (hora >= 0 && hora <= 12) {
    console.log('Bom dia!')
} else if(hora <= 19) {
    console.log('Boa Tarde!')
} else if(hora <= 23) {
    console.log('Boa noite!')
}

// condicional com boolean

const tenhoGrana = !true

if (tenhoGrana) {
    console.log('Vou sair de casa')
} else {
    console.log('Vou ficar em casa')
}