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