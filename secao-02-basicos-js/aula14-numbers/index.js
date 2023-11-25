let num1 = 1500 //number
let num2 = 2.5 //number
let num3 = 10.572837487287342
let num4 = 10

console.log(num1 + num2)

// podemos converter numeros para string ...

console.log(num1.toString() + num2);

// como não atribuimos diretamente para a variavel, apenas nossa visualização no console.log fui mudada, não o valor da string
console.log(typeof num1)

// num1 = num1.toString()
// console.log(typeof num1)

// IMPORTANTE
// Podemos coverter numeros decimais para binarios utilizando a seguinte sintaxe:

// CONVERTENDO PRA BINARIO
console.log('Covertendo pra binario ', num1.toString(2))

// ARREDONDANDO ou CONTROLANDO a exibição das casas decimais
console.log(num3.toFixed(2))


// Esta sintaxe serve para verificar se, uma variavel do tipo number, é um numero INTEIRO, e então, retorna um boleano(true ou false)
console.log(Number. isInteger(num1))


// Number.isNaN() retorna um bool(true or false), se o resultado de uma conta for do tipo NaN ele retorna true, se não, false, serve para verificar se o tipo
// de uma conta é NaN ou não ...
let temp = num1 * 'Olá'
console.log(Number.isNaN(temp))

// JavaScript tem uma imprecisão, pois para realizar calculos ele se baseia no padrão IEEE 754-2008, esse padrão causa imprecisão ...
// Exemplo:
let num5 = 0.1
let num6 = 0.7

// a soma dos numeros acima deveria resultar em 0.8, mas por conta do padrao impreciso, resulta em outro valor ...
console.log(`Este log exibe um resultado impreciso: ${num5 + num6}`)
// 0.7999999999999999

// para mais duvidas veja aula 14 no vídeo de numero 26 da playlist!!!