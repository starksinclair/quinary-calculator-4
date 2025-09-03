

document.addEventListener("DOMContentLoaded", function() {
    const QuinaryDisplay = document.getElementById("Qdisplay");
    const Decimaldisplay = document.getElementById("Ddisplay");
    const numberButtons = document.querySelectorAll(".numButton");
    const toggleDisplayButton = document.getElementById("toggleDisplay");
    const clearBtn = document.getElementById("clear-btn");

    //can rid off
    const catPicture = document.getElementById("catPic");
    const DeltaOpactiy = 0.05;
    catPicture.style.opacity=0; //pre-game var
    let counterForSecret = 0;
    let trademarked=false;
    //can rid off




    let currentInput = ""; //placeholder String
    let showingQuinaryRN = true;
    


    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent;
            if(currentInput==="0"){
                currentInput = value;
            }else{
                currentInput+=value;
            }
            updateDisplay();
        });
    });

    //toggleDisplayHangle
    toggleDisplayButton.addEventListener("click", () =>{
        showingQuinaryRN = !showingQuinaryRN;
        updateDisplay();



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
        updateDisplay();
    });

    function updateDisplay(){
        const decimalValue = parseInt(currentInput || "0", 5); //So... might need to get rid of this, dicuss in class, automatically breaks the base 5 number, into base 10
        QuinaryDisplay.textContent = "Quinary: "+currentInput;
        Decimaldisplay.textContent = "Decimal: "+(isNaN(decimalValue) ? "Invalid" : decimalValue);

        //if QDisplay is on than display QDisplay, hide DDisplay; reverse is true
        QuinaryDisplay.style.display = showingQuinaryRN ? "block" : "none";
        Decimaldisplay.style.display = showingQuinaryRN ? "none" : "block";
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
    updateDisplay();
})//end of DOM loading