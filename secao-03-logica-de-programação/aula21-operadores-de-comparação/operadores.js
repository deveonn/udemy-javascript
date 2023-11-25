/** 
Operadores de comparação

 * > maior que
 * < menor que
 * >= maior OU igual
 * <= menor OU igual
 * == igualdade ( não usar!!!! )
 * === igualdade estrita (checa valor e tipo)
 * != diferente (checa apenas valor)
 * !== diferente estrito (checa valor e tipo)
 * 
 */

// ? Usados para comparar valores, retoram um bool ...

// console.log(10 > 5)

// ? Podemos gravar em variaveis retorno boleano ...

// const exprecao = 10 > 5
// console.log(exprecao)

// ? menor OU igual retorna true se for, menor, ou igual 
// console.log(10 >= 5) //true
// console.log(10 >= 10) // true
// console.log(10 >= 11) // false

// ? Dá pra compara valores dentro de variaveis

// const num1 = 10
// const num2 = 11
// const comparar = num1 > num2
// console.log(comparar) // false

// ? Geralmente NÃO usamos o operador igualdade(==) por que:

// const num1 = '10' // string...
// const num2 = 10 // number...
// const comparar = num1 == num2
// console.log(comparar)
// true

// TODO o operador de igualdade retrona true, porém, não é exatamente igual ...
// TODO num1 é string, num2 é number ...
// TODO o operador de igualdade(==) faz uma COERÇÃO DE TIPO implícita automaticamente...

// * Procure usar o operador de igualdade estrita(===)

// const num1 = '10'
// const num2 = 10
// const comparar = num1 === num2
// console.log(comparar)
// false --> são de dois tipos diferentes, portanto, false ...

// TODO o mesmo se aplica ao operador de diferente(!=), então use '!=='