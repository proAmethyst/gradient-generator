

// dark-mode functionality
let darkModeBtn = document.getElementById("lightMode");

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

darkModeBtn.addEventListener("click", myFunction);






// color picker functionality


let codeDisplay = document.querySelector("h3");
let color1 = document.querySelector(".setcolor1");
let color2 = document.querySelector(".setcolor2");
var gradientDisplay = document.getElementById("grad-display");
let colorAlpha1 = document.querySelector("#color1_picker_alpha");
let colorAlpha2 = document.querySelector("#color2_picker_alpha");


    function setLinearGradient() {
        gradientDisplay.style.background = "linear-gradient(to right, "
                                            + color1.value 
                                            + (colorAlpha1.value == 255 ? "" : parseInt(colorAlpha1.value).toString(16).padStart(2, "0"))
                                            + "," 
                                            + color2.value 
                                            + (colorAlpha2.value == 255 ? "" : parseInt(colorAlpha2.value).toString(16).padStart(2, "0"))
                                            + ")";
        codeDisplay.textContent = gradientDisplay.style.background + ";";
    }

    color1.addEventListener("input",setLinearGradient);
    color2.addEventListener("input",setLinearGradient);
    colorAlpha1.addEventListener("input",setLinearGradient);
    colorAlpha2.addEventListener("input",setLinearGradient);

    
    function setRadialGradient() {
        gradientDisplay.style.background = "radial-gradient("
                                            + color1.value
                                            + (colorAlpha1.value == 255 ? "" : parseInt(colorAlpha1.value).toString(16).padStart(2, "0"))
                                            + ","
                                            + color2.value
                                            + (colorAlpha2.value == 255 ? "" : parseInt(colorAlpha2.value).toString(16).padStart(2, "0"))
                                            + ")";
        codeDisplay.textContent = gradientDisplay.style.background + ";";
    }



let cckboxLinear = document.getElementById("linear-check");
let cckboxRadial = document.getElementById("radial-check");
let displayRadial = false;
let displayLinear = true;


function setFormatRadial(){
    displayRadial = true;
    displayLinear = false;
    color1.addEventListener("input",setRadialGradient);
    color2.addEventListener("input",setRadialGradient);
    colorAlpha1.addEventListener("input",setRadialGradient);
    colorAlpha2.addEventListener("input",setRadialGradient);
    gradientDisplay.style.background = "radial-gradient("
                                        + color1.value
                                        + (colorAlpha1.value == 255 ? "" : parseInt(colorAlpha1.value).toString(16).padStart(2, "0"))
                                        + ","
                                        + color2.value
                                        + (colorAlpha2.value == 255 ? "" : parseInt(colorAlpha2.value).toString(16).padStart(2, "0"))
                                        +")";
    codeDisplay.textContent = gradientDisplay.style.background + ";";
}


function setFormatLinear(){
    color1.removeEventListener("input",setRadialGradient);
    color2.removeEventListener("input",setRadialGradient);
    colorAlpha1.removeEventListener("input",setRadialGradient);
    colorAlpha2.removeEventListener("input",setRadialGradient);
    displayRadial = false;
    displayLinear = true;
    gradientDisplay.style.background = "linear-gradient(to right, "
                                        + color1.value 
                                        + (colorAlpha1.value == 255 ? "" : parseInt(colorAlpha1.value).toString(16).padStart(2, "0"))
                                        + "," 
                                        + color2.value 
                                        + (colorAlpha2.value == 255 ? "" : parseInt(colorAlpha2.value).toString(16).padStart(2, "0"))
                                        + ")";
    codeDisplay.textContent = gradientDisplay.style.background + ";";

}


cckboxRadial.addEventListener("click", setFormatRadial);
cckboxLinear.addEventListener("click", setFormatLinear);





