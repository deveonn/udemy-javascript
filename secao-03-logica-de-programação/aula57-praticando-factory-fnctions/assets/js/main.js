const calcButtons = document.querySelector("#calcButtons")
const calcButton = document.querySelector(".calcButton")
const calcInput = document.querySelector("#calcInput")

calcButtons.addEventListener('click', (e) => {
  
  if(e.target.getAttribute('data-calc') === '=') {
    alert('calculado')

    const soma = calcValues(calcInput.value)
    console.log(soma.sum())
    return
  }

  if(e.target.getAttribute('data-calc') === 'C') {
    calcInput.value = ''
    return
  }

  let calculate = e.target.getAttribute('data-calc') 
  calcInput.value += calculate
})

// ! esboço de função, longe de ser a função final de calculo
// TODO como pegar valores e fazer contas com diversos sinais?
// TODO pois com essa logica, vamos apenas calcular somente com soma, somente com subtração etc ...

function calcValues(value) {
  let numbers = [];
  let result = 0;

  return {
    sum() {
      const numbersTxT = value.split('+')
      console.log(numbersTxT)

      numbersTxT.forEach(element => {
        return numbers.push(Number(element))
      });

      numbers.forEach(number => {
        return result += number
      })

      console.log(result)
    }
  }
}