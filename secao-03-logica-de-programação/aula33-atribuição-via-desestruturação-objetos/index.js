// ? com objetos, normalmente trabalhamos com notação de ponto:

const pessoa = {
    nome:"João",
    sobrenome:"Vargas",
    idade: 54,
    endereço: {
        rua: "Rua da Felicidade",
        numero: 420
    }
}

// * notação de ponto:
// const nome = pessoa.nome
// console.log(nome)

// ? Pegamos uma informação de um objeto, usando atribuição via desetruturação, deste jeito:

// * Atribuição via desestruturação:

                                //  podemos declarar valores assim ...
const { nome, sobrenome, idade, cpf = "Não declarado."} = pessoa
console.log(nome, sobrenome, idade)

// TODO repare que, usamos chave antes da atribuição, o que vai dentro dessa chave serve para pegar/nomear o que queremos de um objeto, depois atribuimos o objeto que queremos pegar a informação, como está acima...

// ? Se necessario, trocar o nome de uma informação, dentro de um objeto, usando atribuição via desestruturação, podemos fazer da seguinte forma:

const pessoa2 = {
    nome2:"Maria",
    sobrenome2:"Vargas",
    idade2: 48,
    endereço2: {
        rua2: "Rua da Felicidade",
        numero2: 420
    }
} 


// * Mudamos o nome da variével assim(usando dois pontos)!!
const {nome2: exemplo, sobrenome2, idade2} = pessoa2
console.log(exemplo)

// ? Mas e se quisermos pegar um objeto, que está dentro de outro objeto, usando atribuição via desestruturação? Podemos fazer da seguinte forma:

const { endereço2: {rua2, numero2} } = pessoa2
console.log(rua2, numero2)

// * Primeiro, declaramos o objeto que está dentro do objeto, que vamos pegar por atribuição via desestruturação(nese caso o endereço), depois abrimos chaves e dentro dessas chaves o que queremos do objeto, que está dentro do outro objeto!

// ? Podemos usar spread operator em atribuição via desestruturação, para pegar varias coisas, separando outras:

const pessoa3 = {
    nome3:"Samuel",
    sobrenome3:"Vargas",
    idade3: 32,
    endereço3: {
        rua3: "Rua da Esperança",
        numero3: 890
    }
} 
 
// separei o nome ... 
const { nome3, ...resto} = pessoa3 
console.log(resto)