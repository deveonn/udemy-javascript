/*
 
__Operadores aritméticos__

+   -> somar / concatenar
-   -> subtrair
/   -> divisão
%   -> resto de divisão
*   -> multiplicação
**   -> potenciação
++  -> incrementar +1 
--  -> decrementar -1

__Ordem de Precedencia do JS__

()  -> em parenteses
**  -> potenciação
* ou / ou %
+ ou -  -> por ultimo

 */

let contador = 1;
// incrementa depois ...
contador++;

// ++incrementa antes ...
// ++contador

// exemplo
console.log(contador++);
console.log(contador);


// código mais enxuto

const passo = 50
contador = 0

contador += passo // mesma coisa que contador = contador + passo
console.log(contador)
contador += passo
console.log(contador)
contador += passo
console.log(contador)

contador = 1

contador *= passo
console.log(contador)
contador++
contador++
contador **= 10
console.log(contador)


// CONVERTENDO STRING EM NÚMERO

let n1 = parseFloat('5.5') //usando parseInt() ou parseFloat()

n1 = parseInt('5')
let n2 = '5'

// OU usando apenas Number()

n3 = n2
n4 = 45

console.log(n1+n2)
console.log(n3+n4)