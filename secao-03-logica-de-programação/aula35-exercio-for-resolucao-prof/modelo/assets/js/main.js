const elementos = [
    {tag:'p', frase:'Isto é um paragrafo.'},
    {tag:'div', frase:'Isto é uma div.'},
    {tag:'footer', frase:'Isto é um footer.'},
    {tag:'section', frase:'Isto é uma section.'},
]

const container = document.querySelector('.container');
const div = document.createElement('div')

for (let i = 0; i < elementos.length; i++) {
    const {tag, frase} = elementos[i]
    let createTag = document.createElement(tag);
    //passando texto pra uma tag criada ...
    createTag.innerHTML = frase
    div.appendChild(createTag)
}

container.appendChild(div)