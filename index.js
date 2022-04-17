class Calculator {
constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
}
}

clear() {
    this.currentOperand =''
    this.previousOperand =''
    this.operation = undefined
}

delete() {

}

appendNumber(number) {
    this.currentOperand = this.currentOperand.toString() + number.toString()
}

chooseOperation(operation) {

}

computer(operation) {

}

updateDisplay(){
    this.currentOperandText = this.currentOperand
}
}



const numberButtons = document.querySelectorAll("[data-number]")
const operatiosButtons = document.querySelectorAll("[data-operation")
const equalsButton = document.querySelector("[data-equals]")
const deleteButton = document.querySelectorAll("[data-delete]")
const allCrearButton = document.querySelectorAll("[data-all-clear]")
const previousOperandTextElementButton = document.querySelector("[data-previous-operand]")
const currentOperandTextElementButton = document.querySelector("[data-current-operand]")

const calculator = new calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
    })
})