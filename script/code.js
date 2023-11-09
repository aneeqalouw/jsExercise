//buttons and output
let btnCalcAdd = document.querySelector('#btnAdd')
let btnCalcSubtract = document.querySelector('#btnSubtract')
let output = document.querySelector('#output')

//functions
function addition (){
    let num1 = document.querySelector('#num1').value
    let num2 = document.querySelector('#num2').value
    let answer = +num1 + +num2;
    output.innerHTML = answer;

}

function subtraction () {
    let num1 = document.querySelector('#num1').value
    let num2 = document.querySelector('#num2').value
    let answer = +num1 - +num2
    output.innerHTML = answer

}

//events
btnCalcSubtract.addEventListener('click', subtraction)
btnCalcAdd.addEventListener('click', addition);
