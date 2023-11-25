//? Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura;
//? Retorne true se a imagem estiver no modo paisagem ...

// function ePaisagem(altura, largura) {
//     if (largura > altura) return true
//     return false
// }

// const img =  ePaisagem(80, 30);

// console.log(img)

// * Solução que achei pra fazer mais simples ...
// const ePaisagem = (largura, altura) => largura > altura? true : false;
// console.log(ePaisagem(1920, 1080))

// * Solução do Prof.

const ePaisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(1920, 1080));
