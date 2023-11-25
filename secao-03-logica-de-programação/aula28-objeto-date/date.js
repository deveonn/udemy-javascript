// Objeto que é usado para trabalhar com datas ...

// O objeto date é uma função construtora, por isso usamos new, vamos aprender o que é mais tarde ... 

// Gravamos date em uma variavel pois ela gera um objeto com a data, hora etc ...

// O objeto date é formado por milésimos e sentésimos de segundo, que se iniciou em 01/01/1970


// const tresHoras = 60 * 60 * 3 * 1000; 
// const umDia = 60 * 60 * 24 * 1000; 
// const data = new Date();



// O mês em javascript começa em 0 (janeiro = 0, etc ...)
// ano, mês, dia, hora, minuto, segundo, milésimos de segundo ...
// const data = new Date(2019, 3, 20, 15, 14, 27);

// Podemos fazer datas no formato string:

// No tipo string seguimos esse padrão abaixo, e o numero do mês é normal(começa em 1 e termina em 12)
const data = new Date('2019-04-20 20:20:59.999');

// Podemos pegar um dado específico do objeto date, usando seus seguintes métodos:

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // Começa em zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('Segundo', data.getSeconds());
console.log('Mile-segundos', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0 é domingo e 6 sábado

// Dá pra pegar a data em segundos assim:
console.log(Date.now())

// E eu posso gravar a data de agora em segundos detro de uma variavel assim:
const dataAgora = new Date(1655689721229)
console.log(dataAgora)


// Fizemos essa função pq quando n tem zero a esquerda nos segundos, ele não aparece e as horas parecem que falta algo...
function zeroAesquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    const dia = zeroAesquerda(data.getDate());
    const mes = zeroAesquerda(data.getMonth() + 1);
    const ano = zeroAesquerda(data.getFullYear());
    const hora = zeroAesquerda(data.getHours());
    const minuto = zeroAesquerda(data.getMinutes());
    const segundos = zeroAesquerda(data.getSeconds());
    
    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundos}`
}

const dataAtual = new Date();
console.log(formataData(dataAtual));