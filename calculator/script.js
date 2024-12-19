
const display = document.getElementById("display-input");
let isresultDisplayed = false;

function appendToDisplay(input){
  
    if (isresultDisplayed) {
        display.value = input; 
        isresultDisplayed = false; 
    } else {
        if (display.value === '0') {
            display.value = input; 
        } else {
            display.value += input; 
        }
    }
 

}

function clearDisplay(){
    display.value="0";
    isresultDisplayed = false;

}


function calculate(){

    try{
        display.value = eval(display.value);
        isresultDisplayed = false; 
       

    }

    catch(error){
        display.value = "Error";
        isresultDisplayed = true; 
        
        

    }

}