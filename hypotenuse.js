const sideInputs = document.querySelectorAll(".side-input");
const hypothenuseBtn = document.querySelector("#hypotenuse-btn");
const output = document.querySelector("#output");
output.style.display="none";
function calculateSumOfSquares(a,b){
    const sumOfSquares = a*a + b*b ;
    return sumOfSquares;
}

function setMessage(message){
    output.style.display="block";
    output.innerText = message;
}

function calculateHypotenuse(){
    if(Number(sideInputs[0].value)&&Number(sideInputs[1].value)){
        output.style.display="none";
        const sumOfSquares = calculateSumOfSquares(Number(sideInputs[0].value),Number(sideInputs[1].value));
        const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
        setMessage("The length of hypotenuse is "+ lengthOfHypotenuse);
    }else{
        setMessage("Enter 2 sides of Triangle");
    }
}

hypothenuseBtn.addEventListener("click", calculateHypotenuse);