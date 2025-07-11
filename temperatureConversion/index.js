const textbox=document.getElementById("textbox");
const toFahrenheit=document.getElementById("toFahrenheit");
const toCelsius=document.getElementById("toCelsius");
const result=document.getElementById("result");
let temperature;
function convert(){
    if(toFahrenheit.checked){
       temperature = Number(textbox.value);
       temperature = temperature*9/5+32;
       result.textContent=temperature +"°F";
    }else if(toCelsius.checked){
        temperature = Number(textbox.value);
       temperature = (temperature-32) * (5/9);
       result.textContent=temperature.toFixed(1)+"°c";

    }
    else{
        result.textContent= `Please select a Unit...!`;
    }
}
