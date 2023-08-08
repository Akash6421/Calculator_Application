    let firstNumber = '';    // The first number entered by the user
    let operator = '';       // The operator (+, -, *, /) chosen by the user
    let secondNumber = '';   // The second number entered by the user
    let displayValue = 0;

    const display = document.getElementById('display-content');
    const digitButtons = document.querySelectorAll('.digit');
    const clearButton = document.querySelector('.clear');
    const equalButton = document.querySelector('.equals');

    clearButton.addEventListener("click", handleClear);
    equalButton.addEventListener("click",handleEqual);

    digitButtons.forEach(button =>{
        button.addEventListener("click",() =>{
            handleClick(button.innerText);
            updateDisplay();
        });
    });

    function handleClick(digit){
        if(displayValue === 0){
            displayValue = digit;
        }
        else{
            displayValue += digit;
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
        
        updateDisplay();
   }
    function updateDisplay(){
        display.textContent = displayValue;
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
        throw Error("Cannot divide by zero!");
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
  