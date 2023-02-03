const resultDisplay = document.getElementById("result");
const numbers = document.querySelectorAll("#number"); //This is an array
const clear = document.getElementById("clear");
const operation = document.querySelectorAll("#operation");
const equals = document.getElementById("equal");
let input = [];
let allNumber = [];
let convNumber = [];
let isExist = false; 
let isResult = false;
let result;
let answer;
let operationSign = [];

renderApp();


//First and foremost all numbers are stored in an array.
function renderApp()
{
    input = [];
    for(let i = 0; i < numbers.length; i++){
        numbers[i].addEventListener('click', function runSimulation(e){

            if(resultDisplay.textContent === "0" || isExist === false){
                input.push(numbers[i].textContent);
                result = input.join("");
                resultDisplay.textContent = result;
            }

            else if(isResult === true){
                allNumber.push(answer);
                input.push(numbers[i].textContent);
                result = input.join("");
                resultDisplay.textContent = result; 
            }
            
            else if(isExist === true){ 
                input.push(numbers[i].textContent);
                result = input.join("");
                resultDisplay.textContent = result;
            }
        });
    }
}


for(let i = 0; i < operation.length; i++){
    let arithmeticSign = operation[i];
    arithmeticSign.addEventListener("click", ()=>{
        
        if(isResult === true){
            renderApp.runSimulation();
        }
        else{
            allNumber.push(result);
            // arithmeticSign = arithmeticSign.textContent;
            console.log("Stored number: " + allNumber);
            console.log("THis is the operation: " + arithmeticSign.textContent);
            operationSign = arithmeticSign.textContent;
            isExist = true;
            input = []
        }

        
     });
}

equals.addEventListener("click", solveEquation);

function solveEquation(){
    allNumber.push(result);
    convNumber = allNumber.map(Number);
    console.log(convNumber);
    
    
    if(operationSign[0] === "+"){
        answer = convNumber.reduce(function(initialNumber, numberToAdd){
            return initialNumber + numberToAdd;
        })
        resultDisplay.textContent = answer;
        console.log(answer);
        allNumber = [];
        operationSign = [];
        isResult = true;
        

    }
    else if(operationSign[0] === "-"){
        answer = convNumber.reduce(function(initialNumber, numberToAdd){
            return initialNumber - numberToAdd;
        })
        resultDisplay.textContent = answer;
        console.log(answer);
        allNumber = [];
        operationSign = [];
        isResult = true;
        
    }

    else if(operationSign[0] === "x"){
        answer = convNumber.reduce(function(initialNumber, numberToAdd){
            return initialNumber * numberToAdd;
        })
        resultDisplay.textContent = answer;
        console.log(answer);
        allNumber = [];
        operationSign = [];
        isResult = true;
        
    }

    else if(operationSign[0] === "/"){
        answer = convNumber.reduce(function(initialNumber, numberToAdd){
            return initialNumber / numberToAdd;
        })
        resultDisplay.textContent = answer;
        console.log(answer);
        allNumber = [];
        operationSign = [];
        isResult = true;
        
    }
    else{
        console.log("Operation not found");
    }
    
}


clear.addEventListener("click", ()=>{
    input = [];
    allNumber = [];
    resultDisplay.textContent = "0"
});