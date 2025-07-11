const display=document.getElementById("display");
let output;
function appendToDisplay(input){
   output= display.value += input;
}
function clearDisplay(){
    display.value ="";
}
function Calculate(){
    try{    display.value =eval(display.value);
}
catch{
    display.value="error";
}
}
function deleteLastNo(){
  display.value= display.value.toString().slice(0,-1);
}