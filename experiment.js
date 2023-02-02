const resultDisplay = document.getElementById("result");
const numbers = document.querySelectorAll("#number");
const clear = document.getElementById("clear");
const operation = document.querySelectorAll("#operation");
const equals = document.getElementById("equal");
let input = [];
let firstNumber=[];
let secondNumber=[];
let answer;
// let eachNumber; //while used as a global variable, result comes out as ...

let isExist = false;



startApp();


function startApp(){

    for(let i = 0; i < numbers.length; i++){ 
       let eachNumber = numbers[i];
        eachNumber.addEventListener("click", ()=>{
     
        if(resultDisplay.textContent === "0" || isExist === false){
            resultDisplay.textContent = "";
            input.push(eachNumber.textContent);
            firstNumber = input.join("");
            resultDisplay.innerHTML = firstNumber   
            
        }
    else{
        input.push(eachNumber.textContent);
        console.log(input);
        console.log("break");
        }
   })};
   runOperation();
}
// continue thank you
//yo fam, I figured it out


//lmao wetin sup now now
// I go copy the iphone js file to match the one wey I get
//lol

function runOperation(){
for(i = 0; i < operation.length; i++){
    let arithmeticSign = operation[i];
    arithmeticSign.addEventListener("click", ()=>{
        console.log("This is the first Number: " + firstNumber);
        console.log(arithmeticSign.textContent)
        isExist = true;
        input = [];
        startApp();
     });
    }
}

equals.addEventListener("click", solveEquation);


function addNum(){
    answer = firstNumber + secondNumber;
    // resultDisplay.textContent = answer;
    return answer;
}

function subNum(){
    answer = firstNumber - secondNumber;
    // resultDisplay.textContent = answer;
    return answer;
}

function mulNum(){
    answer = firstNumber * secondNumber;
    // resultDisplay.textContent = answer;
    return answer;
}

function divNum(){
    answer = firstNumber / secondNumber;
    return answer;
}


function solveEquation(){
 console.log("solving...")
}


clear.addEventListener("click", ()=>{
    input.pop();
    resultDisplay.innerHTML = input.join("")
});