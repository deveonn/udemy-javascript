const divParagrafos  = document.querySelector('.paragrafos');
// NodeList, não é array!!!
const paragrafosList = divParagrafos.querySelectorAll('p');

const estilosBrowser = getComputedStyle(document.body)
const backgroundColorBody = estilosBrowser.backgroundColor

for(let p of paragrafosList) {
    p.style.backgroundColor = backgroundColorBody
    p.style.color = '#fff'
}

