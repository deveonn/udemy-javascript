// esta função apenas joga um nome repetido dentro de outro escopo para que não haja conflitos com variaveis de mesmo nome dentro do escopo global

// * Podemos usar o querySelector assim
// * document.querySelector('form') -> pega a tag
// * document.querySelector('.form') -> pega a classe
// * document.querySelector('#form') -> pega pelo id

const form = document.querySelector('#form')
const resultado = document.querySelector('#resultado')

const pessoas = []

function criaArray() {
    const nometxt = form.querySelector('#nome')
    const sobrenometxt = form.querySelector('#sobrenome')
    const pesotxt = form.querySelector('#peso')
    const alturatxt = form.querySelector('#altura')

    pessoas.push({
        nome: nometxt.value,
        sobrenome:sobrenometxt.value,
        peso:pesotxt.value,
        altura:alturatxt.value
    });

    console.log(pessoas)
    resultado.innerHTML += `<p>  ${nometxt.value} ${sobrenometxt.value} ${pesotxt.value}  ${alturatxt.value} </p>`
}

form.onsubmit = function (evento) {
    evento.preventDefault()
    alert('ok');
    criaArray()
};

// ! Dependendo de onde está cada função, o escopo pode gerar algumas dores de cabeça, cuidado ... Tive uma travada aqui ...

// ! Estudar escopo quando for trabalhar com isso seria interessante!!!