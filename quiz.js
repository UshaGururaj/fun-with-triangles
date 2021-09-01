const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

const correctAnswers = ["90°","right angled","one right angle","Equilateral triangle","12, 16, 20"];

function calculateScore(){
    let index = 0;
    let score = 0;
    const formResults = new FormData(quizForm);

    for (let value of formResults.values()){
        if(value === correctAnswers[index]){
            score = score + 1;
        }
        index = index + 1;
    }
    output.innerText = "Your score is " + score;
}
submitBtn.addEventListener("click", calculateScore);

