alert('ISSO É UM ALERTA') // apenas para fazer uma alerta
let algo = prompt('Escreva algo:') // ele exibe um campo para o usuario digitar, e retorna, p que o usuario escreveu
let algo2 = confirm('Isto é confirm') // apenas para fazer uma confirmação, diferente de alert, retorna true ou false

let escreva = document.getElementById('print')
let escreveu = document.getElementById('escreveu')

if (algo2 === true) {
    escreva.innerText = 'Apertou em OK'
} else {
    escreva.innerText = 'Apertou em Cancel ou não confirmou nada ...'
}

escreveu.innerText = algo

if (algo == undefined) {
    escreveu.innerText = 'Não escreveu nada =('
}