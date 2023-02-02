const resultDisplay = document.getElementById("result");
const numbers = document.querySelectorAll("#number"); //This is an array
const clear = document.getElementById("clear");
const operation = document.querySelectorAll("#operation");
const equals = document.getElementById("equal");
let input = [];
// let allNumbers; I was trying to put all numbers in an array here, but e no wan cooperate
//i decided to understand how single works first before proceeding to calculate more that 2 numbers.
let firstNumber = [];
let secondNumber = []; 
let allNumber = [];
let answer;
let isExist = false; 
let result;

renderApp();


//First and foremost all numbers are stored in an array.
function renderApp()
{
    input = [];
    for(let i = 0; i < numbers.length; i++){
        numbers[i].addEventListener('click', function runSimulation(){

            if(isExist === false){
                input.push(numbers[i].textContent);
                result = input.join("");
                resultDisplay.textContent = result;
            }
           
            // what is this suppose to do if TRUE?
            else if(isExist === true){ 
                input.push(numbers[i].textContent);
                resultDisplay.textContent = input.join("");
                allNumber.push();
                console.log("This is it: " + allNumber);
            }
        });
    }
}


for(let i = 0; i < operation.length; i++){
    let arithmeticSign = operation[i];
    arithmeticSign.addEventListener("click", ()=>{
        allNumber.push(result);
        console.log("Stored number: " + allNumber);
        console.log("THis is the operation: " + arithmeticSign.textContent)
        isExist = true;
        input = []//you were the problem na wa o
     });
}


equals.addEventListener("click", solveEquation);


// function addNum(){
//     answer = firstNumber + secondNumber;
//     // resultDisplay.textContent = answer;
//     return answer;
// }

// function subNum(){
//     answer = firstNumber - secondNumber;
//     // resultDisplay.textContent = answer;
//     return answer;
// }

// function mulNum(){
//     answer = firstNumber * secondNumber;
//     // resultDisplay.textContent = answer;
//     return answer;
// }

// function divNum(){
//     answer = firstNumber / secondNumber;
//     return answer;
// }


function solveEquation(){
    console.log(allNumber);
}


clear.addEventListener("click", ()=>{
    input.pop();
    resultDisplay.innerHTML = input.join("")
});