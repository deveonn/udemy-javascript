function showDate() {
  const clockConainter = document.querySelector("#clock");
  const date = new Date();
  const weekDay = date.getDay(); //dia da semana
  const day = date.getDate(); //dia do mês
  const mouth = date.getMonth(); //mes
  const year = date.getFullYear();
  const hours = date.getHours();
  // minute are let variable because if conditional ...
  let minutes = date.getMinutes();

  let getWeekDay;
  let getMonth;

  switch (weekDay) {
    case 0:
      getWeekDay = "Domingo";
      break;
    case 1:
      getWeekDay = "Segunda-Feira";
      break;
    case 2:
      getWeekDay = "Terça-Fera";
      break;
    case 3:
      getWeekDay = "Quarta-Feira";
      break;
    case 4:
      getWeekDay = "Quinta-Feira";
      break;
    case 5:
      getWeekDay = "Sexta-Feira";
      break;
    case 6:
      getWeekDay = "Sábado";
      break;
  }

  switch (mouth) {
    case 0:
      getMonth = "Janeiro";
      break;
    case 1:
      getMonth = "Fevereiro";
      break;
    case 2:
      getMonth = "Março";
      break;
    case 3:
      getMonth = "Abril";
      break;
    case 4:
      getMonth = "Maio";
      break;
    case 5:
      getMonth = "Junho";
      break;
    case 6:
      getMonth = "Julho";
      break;
    case 7:
      getMonth = "Agosto";
      break;
    case 8:
      getMonth = "Setembro";
      break;
    case 9:
      getMonth = "Outubro";
      break;
    case 10:
      getMonth = "Novembro";
      break;
    case 11:
      getMonth = "Dezembro";
      break;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`
  }

  clockConainter.innerHTML = `${getWeekDay}, ${day} de ${getMonth} de ${year} - ${hours}:${minutes}`;
}

showDate();
