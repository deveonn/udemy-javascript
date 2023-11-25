// ? Um array é uma lista, uma coleção de coisas ...

// * Lista de nomes por exemplo ...
// * Podemos botar qualquer tipo de dado misturado dentro de um array, mas não é uma boa pratica...

//  ?                  0         1       2       3        4
let nomesAlunos = ['Émerson', 'João', 'Maria', 'Mark', 'Alice']
console.log(nomesAlunos)

// Pra cada item dentro de um array temos um indice, que começa em 0, 1, 2, 3 e vai representar, respectivamente, qual item é dentro do array ...

console.log(nomesAlunos[3])

// ? Podemos substituir um item do nosso array deste modo:

nomesAlunos[3] = 'Will'
console.log(nomesAlunos[3])

// ? Podemos criar um novo item dentro do array, em um novo indice deste modo:

nomesAlunos[5] = 'Roberto'
console.log(nomesAlunos)

// ? Para saber o tamanho do array:
console.log(nomesAlunos.length)

// TODO Para aumentar nosso array, passando um novo item, depois do último, podemos usar length, deste modo abaixo ...

nomesAlunos[nomesAlunos.length] = 'John'
nomesAlunos[nomesAlunos.length] = 'Guy'
nomesAlunos[nomesAlunos.length] = 'Dude'
console.log(nomesAlunos)

// TODO também temos uma função para fazer a mesma coisa, que é na verdade, até a mais recomendada e mais pratica de se executar ... é a .push()

nomesAlunos.push('Doll')
nomesAlunos.push('Gerald')
console.log(nomesAlunos)
// * Bem mais pratico do que digitar o nome do array com length ...

// ? Mas para adicionar ao inicio do array, usamos o seguinte método:

nomesAlunos.unshift('Luiza')
nomesAlunos.unshift('Fábio')
console.log(nomesAlunos)

// ? Para remover do final do array, podemos usar o método .pop()

nomesAlunos.pop()
// removeu o Gerald ...

// ? Para remover do começo, podemos usar o método .shift()

nomesAlunos.shift()
// removeu o Fábio ...

// ! Lembrando que adicionar assim, ao inicio ou ao fim, estamos ALTERANDO OS INDICES DO ARRAY CONSEQUENTEMENTE!!!

// ? Para excluir um indice em específico, dentro da coleção, podemos usar delete, deste modo abaixo

delete nomesAlunos[5]
console.log(nomesAlunos)

// O Indice 5 do array agora está vazio, ou seja, dependendo do método que vc usa, você pode ou não mudar os indices do array consequemente, no caso do 'delete ...', ele não altera os idices, apenas cria um item vazio no lugar ...

// ? Abaixo dois exemplo de como identificar o tipo de um array, usando typeof e instanceof:

// TODO typeof retorna 'object';
console.log(typeof nomesAlunos)

// TODO 'instance of Array' verefica se uma dada variável é um array, e retorna TRUE ou FALSE;
console.log(nomesAlunos instanceof Array)


// ? Podemos fatiar um array, e gerar um novo com menos itens, por exemplo:

nomesAlunosCortado = nomesAlunos.slice(0, 5)

console.log(nomesAlunosCortado)
// Vai pegar os 5 primeiros itens do array e exibir, como se cortasse o resto, digamos assim.