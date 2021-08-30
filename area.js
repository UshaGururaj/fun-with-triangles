const baseInput = document.querySelector(".input-base");
const heightInput = document.querySelector(".input-height");
const areaBtn = document.querySelector("#area-btn");
const output = document.querySelector("#output");

function showMessage(message){
    output.style.display = "block";
    output.innerText = message;
}
function calculateProduct(a,b){
    const productOfBaseHeigh = a*b;
    return productOfBaseHeigh;
}
function checkArea(){
    if(Number(baseInput.value)&&Number(heightInput.value)){
        output.style.display = "none";
        const productOfBaseHeight = calculateProduct(Number(baseInput.value),Number(heightInput.value));
        const area = productOfBaseHeight/2;
        showMessage("The area of triangle is " + area + " cm².");
    }else{
        showMessage("Enter both base and height.");
    }
}
areaBtn.addEventListener("click",checkArea);