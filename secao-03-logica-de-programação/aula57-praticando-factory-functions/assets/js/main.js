function createCalculator() {
  return {
    display: document.querySelector("#calcInput"),

    startCalc() {
      this.clickButtons();
      this.pressButtons();
    },

    removeLastNumber() {
      this.display.value = this.display.value.slice(0, -7);
    },

    clearValue() {
      this.display.value = "";
    },

    insertBtnValue(valueFromEl) {
      this.display.value += valueFromEl;
    },

    calculate() {
      let equation = this.display.value;

      try {
        let result = eval(equation);

        if (!result) {
          alert("Valores incorretos!");
          return;
        }

        this.display.value = result;
      } catch (e) {
        alert("Valores incorretos!");
        return;
      }
    },

    clickButtons() {
      document.addEventListener("click",function (e) {
          const el = e.target;

          if (el.classList.contains("btn-equal")) {
            this.calculate();
          }

          if (el.classList.contains("calcButton")) {
            //only to prevent the '=' be inserted after the result in the display
            if (el.classList.contains("btn-equal")) return;

            this.insertBtnValue(el.innerText);
          }

          if (el.classList.contains("btn-clear")) {
            this.clearValue();
          }

          if (el.classList.contains("btn-delete")) {
            this.removeLastNumber();
          }
        }.bind(this)
      );
    },

    pressButtons() {
      document.addEventListener("keyup", (e) => {
        console.log(e.key);
        if (e.key === "Enter") {
          this.calculate();
        }
      });
    },
  };
}

const calculator = createCalculator();
calculator.startCalc();
