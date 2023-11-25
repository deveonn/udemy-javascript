# This in JS

O this é uma maneira de instanciar(acessar) propriedades, mas isso depende de, onde estamos instanciando o this:

Quando devemos usar o this?
- Normalmente vamos usar o this quando formar trabalhar com Factory Functions ou Constructor functions!
- Pois vamos manipular chaves a atributos dentro do mesmo contexto
- E é esse o problema que o this vai resolver quando precisarmos instanciar atributos dentro do próprio objeto
- This ainda permite usar atributos declarados posteriormente ao método que precisa daquele atributo(exemplo do peso abaixo)



Fora de escopos locais, o this acessa o objeto window, se o this estiver:

  - Dentro de uma função, acessa o objeto window
    ex: console.log(this)
    // output: window

  - Dentro de um objeto, referencia e acessa as propriedades do objeto, repare neste exemplo, onde temos um método que mostra o peso
    ex: 

    js```
      function user(name, lastName, peso) {
        return {
          name,
          lastName,
          showWeight() {
            // usando o this
            return `O peso de ${name} é ${this.peso}`
          }
          peso: 80
        }
      }
    ```

# Get em Objetos JS

- o Get em objetos do JavaScript, faz com que um método possa ser chamado como um atributo, exemplo


js```

function newUser(name, lastName, age, altura, peso) {
  return {
    name, 
    lastName, 
    age,
    doSomething(something) {
      return `${name} are ${something}.`
    },

    // chamamos isso de GETTER
    get imc() {
      const índice = this.peso / (this.altura ** 2)
      return `o IMC é: ${índice.toFixed(2)}.`
    },
    altura,
    peso,
  }
}

const pessoa = newUser('John', 'Doe', 25, 1.80, 80)

__________________________
console.log(pessoa.imc)
output:24.69
__________________________
```

--> REPARE QUE, usamos o get foi declarado a função de IMC, e isso permite que quando chamado o método, podemos chamar sem usar parentes.

# Getter com Setter

Usando get e set, podemos por exemplo, manipular propriedades do objeto, definindo novos valores quando necessário:

js```
  ...
   get imc() {
      const índice = this.peso / (this.altura ** 2)
      return `o IMC é: ${índice.toFixed(2)}.`
    },

    // Getter com Setter
    get changeName() {
      return `${this.nome} ${this.sobrenome}`
    },
    set changeName(valor) {
      const separado = valor.split(' ')
      this.nome = separado.shift()
      this.sobrenome = separado.join(' ')
    }
  ...

```
--> Acima um método onde podemos trocar o nome/sobrenome do usuário no objeto

- Sempre usamos get e set juntos!
- Sempre usamos this para instanciar os valores do objeto e manipula-los com get e set!
