const sideInputs = document.querySelectorAll(".side-input");
const hypothenuseBtn = document.querySelector("#hypotenuse-btn");
const output = document.querySelector("#output");
// output.style.display="none";
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

        if((Number(sideInputs[0].value)<=0) || (Number(sideInputs[1].value)<=0)){

            setMessage("Length of sides should be greater than 0.");

        } else {
            output.style.display="none";
            const sumOfSquares = calculateSumOfSquares(Number(sideInputs[0].value),Number(sideInputs[1].value));
            const lengthOfHypotenuse = Math.sqrt(Number(sumOfSquares));
            setMessage("The length of hypotenuse is "+ lengthOfHypotenuse + " cm.");
        }
    }else{
        setMessage("Enter 2 sides of Triangle");
    }
}

hypothenuseBtn.addEventListener("click", calculateHypotenuse);