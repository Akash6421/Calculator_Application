    let firstNumber = '';    // The first number entered by the user
    let operator = '';       // The operator (+, -, *, /) chosen by the user
    let secondNumber = '';   // The second number entered by the user
    let displayValue = 0;

    const display = document.getElementById('display-content');
    const digitButtons = document.querySelectorAll('.digit');
    const clearButton = document.querySelector('.clear');
    const equalButton = document.querySelector('.equals');
    const operatorButton = document.querySelectorAll('.operator');
    const clickSound = document.getElementById('clickSound');
    const clickEqual = document.getElementById('equal');
    const clickClear = document.getElementById('clear');
    const clickOperator = document.getElementById('operator');

    clearButton.addEventListener("click", () => {
        playClearSound();
        handleClear();
    });

    equalButton.addEventListener("click", () => {
        playEqualSound(); 
        handleEqual();
    });

    digitButtons.forEach(button =>{
        button.addEventListener("click",() =>{
            playClickSound();
            handleClick(button.innerText);
            updateDisplay();
        });
    });

    
    operatorButton.forEach(button => {
        button.addEventListener("click", () => {
            playOperatorSound();
            handleOperator(button.innerText);
            updateDisplay();
        })
    })

    function handleClick(digit){
        if(operator === ''){
            firstNumber += digit;
        }
        else{
            secondNumber += digit;
        }
        displayValue = (operator === '') ? firstNumber : secondNumber
        updateDisplay();
    }

    function handleOperator(operatorselected){
        if(firstNumber !== '' && operator === ''){
            operator = operatorselected;
            displayValue = operator;
            updateDisplay();
        }
    }

    function handleClear(){
         firstNumber = '';  
         operator = '';       
         secondNumber = '';   
         displayValue = 0;
         updateDisplay();
    }

    function handleEqual(){
        if(firstNumber!== '' && secondNumber !== '' && operator !== ''){
            const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
            displayValue = result.toString();
            firstNumber = result.toString();
            operator = '';
            secondNumber = '';
            updateDisplay();
        }
   }
    function updateDisplay(){
        display.textContent = displayValue;
    }

    function playClickSound() {
        clickSound.currentTime = 0; // Reset the sound to the beginning
        clickSound.play();
      }
      function playClearSound() {
        clickClear.currentTime = 0; // Reset the sound to the beginning
        clickClear.play();
      }
      function playEqualSound() {
        clickEqual.currentTime = 0; // Reset the sound to the beginning
        clickEqual.play();
      }
      function playOperatorSound() {
        clickOperator.currentTime = 0; // Reset the sound to the beginning
        clickOperator.play();
      }
    // Function to add two numbers
    function add(a,b){
        return a+b;
    }

    // Function to subtract two numbers
    function subtract(a,b){
        return a-b;
    }
    // Function to multiply two numbers
    function multiply(a,b){
        return a*b;
    }

    // Function to divide two numbers
    function divide(a,b){
        if(b === 0)
        alert("LOL!! Cannot divide by zero!");
        else{
        return a/b;
        }
    }

    // Function to perform a calculation based on the operator and two numbers
    function operate(operator, num1, num2){
    // Use a switch statement to determine which operation to perform
        switch(operator){
            case '+':
                return add(num1, num2);
            case '-':
                return subtract(num1, num2);
            case '*':
                return multiply(num1, num2);
            case '/':
                return divide(num1, num2);
            default:
                throw new Error('Invalid Operator! ${operator}');

        }
    }
  