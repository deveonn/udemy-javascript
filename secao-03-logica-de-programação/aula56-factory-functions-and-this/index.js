// ? Factory Function: Funções que retornam objetos
// ? Quando um objeto possui uma função, essa função se chama método ...

// ? A principal vantagem de usar factory function é poder usar as vantagens de Programação Orientada a Objetos
// ? Ou seja, ter classes que podem ser reutilizadas varias e varias vezes ....

// * Exemplo de uma factory function:
function pessoa(name, lastName, age, altura, peso) {
  return {
    name, 
    lastName,
    age,
    altura,
    peso,

    // Métodos
    doSomething(something) {
      return `${name} are ${something}.`
    },

    fala(assunto) {
      return `${name} está falando ${assunto}.`
    },

    // Getter
    get imc() {
      const índice = this.peso / (this.altura ** 2)
      return `o IMC é: ${índice.toFixed(2)}.`
    },

    // Getter com Setter
    get changeName() {
      return `${this.nome} ${this.sobrenome}`
    },
    set changeName(valor) {
      const separado = valor.split(' ') // split() -> Cria um array a partir de uma string, onde definimos que espaço vazio separa cada item
      this.nome = separado.shift() // shift() -> Remove o primeiro índice do array, e retorna para a variável que for atribuído 
      this.sobrenome = separado.join(' ') // join() -> Junta todos os indices do array em uma string, o valor passado pra essa função define o que vai separar cada palavra na string
    },
  }
}

const user1 = pessoa('John', 'Doe', 25, 1.80, 80)
user1.changeName = "Maria Albina José"


console.log(user1.fala('olá'))
