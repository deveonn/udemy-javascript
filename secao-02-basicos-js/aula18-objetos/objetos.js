// Objetos são como arrays, só que mais especificos com o que guardam
// pois é nós que definimos o que esse objeto terá
// assim como arrays,pode guardar funções etc
// o interessante disso, é que como guardamos funções dentro de objetos, podemos criar nosso proprios métodos ...


// TODO esta função retorna pra nós parametros para criar objetos, ficando mais facil cria-los ...


// ? Quando uma função, retorna um objeto, em que os parametros que esse objeto retorna, são os mesmos do nome de cada parametro
// ? não precisamos especificar o que cada nome dentro do objeto vai receber ...


// ?                aqui parametro!!!!!!!!
function criaPessoa(nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}


// ?                       aqui é argumento!!!!!!!
const pessoa1 = criaPessoa('Émerson', 'Vargas', 23)
const pessoa2 = criaPessoa('John', 'Hammer', 32)
const pessoa3 = criaPessoa('Roberto', 'Hillbert', 10)
const pessoa4 = criaPessoa('Silva', 'Rodrigo', 40)
const pessoa5 = criaPessoa('Santos', 'Claro', 63)
console.log(pessoa1.idade)


// TODO aqui criamos um método 'fala()' do objeto user que criamos
const user = {
    nome:'Émerson',
    sobrenome:'Vargas',
    idade: 23,

    // TODO Usamos this para referenciar dentro do objeto ...
    fala() {
        console.log(`A minha idade atual é ${this.idade}`)
    },

    incrementaIdade() {
        this.idade++
    }
}

// Aqui estamos usando os métodos que criamos ...
user.fala()
user.incrementaIdade()
user.fala()