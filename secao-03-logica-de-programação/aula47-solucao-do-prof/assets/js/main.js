let clock = document.querySelector("#clock");
let seconds = 0;
let timer;

document.addEventListener('click', (e) => {
    const el = e.target

    if(el.classList.contains('start')){
        startTimer()
        clock.classList.remove('pause')
    }

    if(el.classList.contains('pause')){
        clearInterval(timer)
        clock.classList.add('pauseTimer')
    }

    if(el.classList.contains('reset')){
        clock.classList.remove('pauseTimer')
        clearInterval(timer)
        clock.innerHTML = '00:00:00'
        seconds = 0
    }
})

function getTimeFromSeconds(seconds) {
    const data = new Date(seconds * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone:'GMT'
    })
}

function startTimer() {
    timer = setInterval(function(){
        seconds++;
        clock.innerHTML = `${getTimeFromSeconds(seconds)}`
   }, 1000)
   return timer
}


// classlist é um metodo que tem funções para manipular classes,
// nos elementos html(remover, adicionar, etc)
// consultar docs para ver mais métodos dele!!!! 