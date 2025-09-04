import {
    addQuinary,
    divideQuinary,
    hasOperator, isValidQuinaryNumber,
    multiplyQuinary,
    quinaryToDecimal, sqrtQuinary,
    squareQuinary,
    subtractQuinary
} from "./logic.js";
document.addEventListener("DOMContentLoaded", function() {
    const QuinaryDisplay = document.getElementById("Qdisplay");
    const Decimaldisplay = document.getElementById("Ddisplay");
    const numberButtons = document.querySelectorAll(".numButton");
    const opButtons = document.querySelectorAll(".opButton");
    const toggleDisplayButton = document.getElementById("toggleDisplay");
    const clearBtn = document.getElementById("clear-btn");
    const equalsBtn = document.getElementById("equals-btn");

    //can rid off
    const catPicture = document.getElementById("catPic");
    const DeltaOpactiy = 0.05;
    catPicture.style.opacity=0; //pre-game var
    let counterForSecret = 0;
    let trademarked=false;
    // let firstValue = null;
    let operator = null;

    //can rid off
    let currentInput = ""; //placeholder String
    let convertToDecimal = false;

    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent;
            if (!isValidQuinaryNumber(value)) return
            if(currentInput==="0" || currentInput==="Invalid"){
                currentInput = value;
                // firstValue = currentInput;
                console.log(currentInput);
            }else {
                currentInput+=value;
                console.log(currentInput);
            }
            updateDisplay(false);
        });
    });

    opButtons.forEach(button => {
        button.addEventListener("click", () => {
           try {
               const operation = button.dataset.op;
               if (operation === 'square') {
                   currentInput= squareQuinary(currentInput)
               } else if (operation === 'sqrt') {
                   currentInput = sqrtQuinary(currentInput)
               }
               else {
                   if (!hasOperator(currentInput)) {
                       currentInput += operation;
                       operator = operation;
                   }
               }
               updateDisplay(false);
           } catch (error) {
               console.error(error);
               alert("Error: " + error.message);
           }
        });
    });

    equalsBtn.addEventListener("click", () => {
        if (currentInput === "" || currentInput === "0") {
            alert("Please enter a number first.");
            return;
        }
        const value = currentInput.split(operator)
        const firstValue = value[0];
        const secondValue = value[1];
        if (!hasOperator(currentInput)) {
            alert("Please enter a operator before performing any calculation.");
            return;
        }
        try {
            switch (operator) {
                case "+":
                    currentInput = addQuinary(firstValue, secondValue);
                    break;
                case "-":
                    currentInput = subtractQuinary(firstValue, secondValue);
                    break;
                case "*":
                    currentInput = multiplyQuinary(firstValue, secondValue);
                    break;
                case "/":
                    if (quinaryToDecimal(secondValue) === 0) {
                        currentInput = "0";
                        alert("Division by zero is not allowed.");
                    } else {
                        currentInput = divideQuinary(firstValue, secondValue);
                    }
                    break;
                default:
                    currentInput = "0";
                    alert("Invalid operation or input.");
                    break;
            }
        } catch (error) {
            alert("Error: " + error.message);
            currentInput = "0";
        }
        updateDisplay(false);
    });

    //toggleDisplayHangle
    toggleDisplayButton.addEventListener("click", () =>{
        convertToDecimal = !convertToDecimal;
        console.log(convertToDecimal, "toggled");
        updateDisplay(convertToDecimal);
        //can rid off
        counterForSecret+=1;
        updateCatPicture();//GET RID OF
        //can rid off
    });

    //clearHandle
    clearBtn.addEventListener("click", ()=>{
        currentInput="0";
        //can rid off
        counterForSecret=0;
        catPicture.style.opacity="0";
        //can rid off
        updateDisplay(false);
    });

    function updateDisplay(convertToDecimal = false) {
        if (!currentInput) currentInput = "0";
        let displayValue = currentInput;
        let decimalValue;

        if (operator && hasOperator(currentInput)) {
            const [firstPart, secondPart] = displayValue.split(operator);
            let value = "";
            if (firstPart) {
                value += quinaryToDecimal(firstPart);
            }
            if (secondPart) {
                value += operator + quinaryToDecimal(secondPart);
            }
            decimalValue = value;
        } else {
            decimalValue = quinaryToDecimal(displayValue);
        }

        if (convertToDecimal) {
            QuinaryDisplay.style.display = "none";
            Decimaldisplay.style.display = "block";
            Decimaldisplay.textContent = "Decimal: " + decimalValue;
        } else {
            QuinaryDisplay.style.display = "block";
            Decimaldisplay.style.display = "none";
            QuinaryDisplay.textContent = "Quinary: " + displayValue;
        }
    }

    function updateCatPicture(){
        if(counterForSecret>=20){
            let currentOpacity = parseFloat(catPicture.style.opacity);
            if(currentOpacity>=1.0){
                if(!trademarked){
                console.log("Trademarked by CS495 Students, do not distribute");
                trademarked=true;
                }
            } else{
                let newOpactiy = currentOpacity+DeltaOpactiy;
                catPicture.style.opacity = newOpactiy.toString();
            }
        }
}

    //init
    currentInput = "0";
    updateDisplay(false);
})//end of DOM loading