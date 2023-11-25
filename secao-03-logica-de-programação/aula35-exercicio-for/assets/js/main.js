function inserirElementos () {
    const elementos = [
        {tag: 'p', texto:'Isto é um paragrafo'}, // 0
        {tag: 'div', texto:'Isto é uma div'}, // 1
        {tag: 'footer', texto:'Isto é um footer'}, // 2 
        {tag: 'section', texto:'Isto é uma section'}, // 3
    ]

    const container = document.querySelector('.container')

    for(let i = 0; i < elementos.length; i++) {
        container.innerHTML += `<${elementos[i].tag}>${elementos[i].texto}`
    }
}

inserirElementos()
