const angles = document.querySelectorAll(".angles");
const isTriangle = document.querySelector(".is-triangle");
const output = document.querySelector(".output");
let sum=0;

function isTriangleCheckFunction(){
  showErrorMessage(""); 
    if(angles[0].value&&angles[1].value&&angles[2].value){

        if((Number(angles[0].value)<=0) || (Number(angles[1].value)<=0) || (Number(angles[2].value)<=0)){

            showErrorMessage("Angles should be greater than 0");

        } else {
            sum = Number(angles[0].value) + Number(angles[1].value) + Number(angles[2].value);
            if(Number(sum) != 180) {

                showErrorMessage("Oh Oh! The angle doesn't form a triangle.Sum of all angles should be equal to 180.");

            }else{

                showErrorMessage("Hey!Angles form a Triangle.");

            } 
        }
  }else{

      showErrorMessage("Please enter all 3 Angles.");

  }
}

function showErrorMessage(errorMessage){
    output.innerText=errorMessage;
}

isTriangle.addEventListener("click",isTriangleCheckFunction);

