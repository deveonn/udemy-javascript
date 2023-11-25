// ? São funções disponiveis tanto no node quanto no navegador;
// ? Usamos elas para controlar timers;

function mostraHoraAi() {
  let date = new Date();
  return date.toLocaleTimeString('pt-BR', {
    hour12: false
  })  
}

// function funcaoDoInterval() {
//     console.log(mostraHoraAi())
// }

// ? aqui estamos usando a função setInterval, do proprio JS, essa função recebe como primeiro parametro, algo pra executar, e de segundo parâmetro, de quanto em quanto tempo executar:

// * note que no setInterval, não precisamos usar as () da função para chama-lá !!!

// * setInterval(funcaoDoInterval, 1000);

// TODO para simplificar nosso código, podemos usr funções anônimas para executar um setInterval:

// setInterval(function() {
//     console.log(mostraHoraAi())
// }, 1000)

// ? Podemos definir um tempo limite para que, uma função, seja executada durante um período de tempo, para isso usamos setTimeout, que vai executar uma função durante um periodo de tempo que for definido:

// TODO para usar setTimeout precisamos gravar um set interval dentro de uma const:

const timer = setInterval(function() {
    console.log(mostraHoraAi())
}, 1000);

// TODO clearInterval vai executar nossa const durante o tempo que for definido...

setTimeout(function() {
    clearInterval(timer);
}, 3000);

setTimeout(function(){
    console.log('Olá Mundo! :D')
}, 4000)