const nome = 'Émerson'
const sobrenome = 'Vargas'
const idade = 24
const peso = 73
const alturaEmMetros = 1.73
const imc = peso / (altura*altura)
let anoNascimento = 2022 - idade

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} quilos e tem ${alturaEmMetros}m de altura.`)
console.log(`Seu IMC é de ${imc.toFixed(2)}`)
console.log(`Seu ano de nascimento é ${anoNascimento}`)