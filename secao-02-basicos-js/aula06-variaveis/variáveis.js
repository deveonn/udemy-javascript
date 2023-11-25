// Usamos variaveis para gravar valores no navegador digamos assim

// Usando let, e for necessario reatribuir um valor pra uma variável let, podemos simplesmente
// declarar apenas o nome da variavel sem o let, exemplo:

let idade = 18
// redeclarando ...
idade = 23


let nome = 'Henrique'; // String

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome,'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve1filho com',nome,'em 2015.');
console.log('0 filho de', nome,'se chama Eduardo.');

// Podemos declarar uma váriavel vazia, e depois adicionar dados a ela:

let nome2; //Declaroua a variavel

nome2 = 'Qualquer coisa ...'
console.log(nome2)

//Podemos reatribuir o valor de uma variável ao longo do código.

nome2= 'John'
console.log(nome2)
 
// Não podemos redeclara a variavel vazia, como está abaixo,mas podemos fazer isso para "iniciar" uma variável

// let nome2;

/** Não devemos:
 
 * Usar palavras reservadas do javascript;
 * Começar a variavel com número
 * Conter espaços ou traços;
 * NÃO UTILIZE VAR, UTILIZE LET!!!!!!!!!(conselho do prof)

 * Devemos:
    * Dar nome significativo as variaveis!!!
    * Usar camelCase;
    * Escrever a variável do respeitando o Case-Sensitive(Usar letras mauisculas e minusculas no lugar certo);
 */