let varA = 'A' //B
let varB = 'B' //C
let varC = 'C' //A

const varVazia = varA;

varA = varB
varB = varC
varC = varVazia
console.log(varA, varB, varC)

// Neste caso, guardamos o valor de varA em uma constante, para que não mude ou acabe como undefined(aconetece usarmos let no lugar de const ...)

// Ou podemos resolver de outro modo:


// atribundo o valor incial das variaveis novamente
varA = 'A'
varB = 'B'
varC = 'C'

// veremos sobre este tipo de sintaxe, mais a frente nesse curso
[varA, varB, varC] = [varB, varC, varA]