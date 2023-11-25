// switch case servem para verificar uma única condicional e fazer algo verificando seu valor ...

// function diaSemanaTexto() {
//   const data = new Date();
//   const diaSemana = data.getDay();

//   if (diaSemana === 0) return "Domingo";
//   if (diaSemana === 1) return "Segunda";
//   if (diaSemana === 2) return "Terça";
//   if (diaSemana === 3) return "Quarta";
//   if (diaSemana === 4) return "Quinta";
//   if (diaSemana === 5) return "Sexta";
//   if (diaSemana === 6) return "Sábado";
// }

// console.log(diaSemanaTexto());

// * Quando temos uma situação, como a de cima, onde checamos apenas uma variável, podemos usar o switch:

// let data = new Date();
// let diaSemana = data.getDay();
// let diaSemanaTexto;

// ? passamos uma variavel pra ele checar, depois definimos varias situações para ele fazer algo, NÃO ESQUEÇA DE USAR BREAK DEPOIS DE CADA CASE!!! Também definimos um valor padrao para caso nenhum dos cases tenha o valor da variavel, o default lá em baixo ...

// TODO como o default é a ultima condicional dentro do bloco do switch, não precisa de break

// ! Se o case não tiver break, ele vai continuar rodando o código até achar um break, então isso pode ocasionar em resultados errados dentro do fluxo de código.

// switch (diaSemana) {
//   case 0:
//     diaSemanaTexto = "Domingo";
//     break;
//   case 1:
//     diaSemanaTexto = "Segunda";
//     break;
//   case 2:
//     diaSemanaTexto = "Terça";
//     break;
//   case 3:
//     diaSemanaTexto = "Quarta";
//     break;
//   case 4:
//     diaSemanaTexto = "Quinta";
//     break;
//   case 5:
//     diaSemanaTexto = "Sexta";
//     break;
//   case 6:
//     diaSemanaTexto = "Sábado";
//     break;
//   default:
//     diaSemanaTexto = ''
// }

// console.log(diaSemanaTexto)

// ? Se botarmos um bloco de comando switch dentro de uma função, podemos não usar o break.
// TODO o return faz o papel de break dentro de uma função, aí podemos trocar ume outro

// * returns week day in text ...

function getWeekDayText(diaSemana) {
  let diaSemanaTexto;

  switch (diaSemana) {
    case 0:
      diaSemanaTexto = "Domingo";
      return diaSemanaTexto;
    case 1:
      diaSemanaTexto = "Segunda";
      return diaSemanaTexto;
    case 2:
      diaSemanaTexto = "Terça";
      return diaSemanaTexto;
    case 3:
      diaSemanaTexto = "Quarta";
      return diaSemanaTexto;
    case 4:
      diaSemanaTexto = "Quinta";
      return diaSemanaTexto;
    case 5:
      diaSemanaTexto = "Sexta";
      return diaSemanaTexto;
    case 6:
      diaSemanaTexto = "Sábado";
      return diaSemanaTexto;
    default:
      diaSemanaTexto = "Something is wrong ...";
  }

  return diaSemanaTexto;
}

let data = new Date();
let diaSemana = data.getDay();

const getWeekDay = getWeekDayText(diaSemana)
console.log(getWeekDay)