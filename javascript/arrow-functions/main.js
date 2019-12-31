/*
  Instructions:
  Troubleshoot the following class by only changing the
  function types, fix the program so you can add the two numbers
  together on the web page.

  Expected Outcome:
  You should be able to put 2 integer values in the inputs of the html,
  and click the button to add them together.
*/

class AddNumbers {
  constructor() {
    this.total = 0
    let number1 = 0
    this.number2 = 0
    this.inputNumber1 = document.querySelector(".number-1")
    this.inputNumber2 = document.querySelector(".number-2")
    this.textTotal = document.querySelector(".total")
    this.button = document.querySelector(".button")

    this.inputNumber1.addEventListener("change", /* Arrow or Standard Function */ {
      number1 = parseInt(this.inputNumber1.value)
    })
    this.inputNumber2.addEventListener("change", /* Arrow or Standard Function with "e" in parameter */ {
      this.number2 = parseInt(e.inputNumber2.value)
    })

    const Add = /* Arrow or Standard Function */ {
      this.total = number1 + number2
    }

    const ButtonClick = /* Arrow or Standard Function */ {
      this.button.addEventListener("click", /* Arrow or Standard Function */ {
        Add()
        this.SetTotalText()
      })
    }

    ButtonClick()
  }

  SetTotalText() {
    this.textTotal.innerHTML = `Total: ${this.total}`
  }
}

new AddNumbers()