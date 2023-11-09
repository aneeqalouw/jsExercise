//buttons and output
let btnCalcAdd = document.querySelector('#btnAdd')
let btnCalcSubtract = document.querySelector('#btnSubtract')
let btnCalcMultiply = document.querySelector('#btnMultiply')
let btnCalcDivide = document.querySelector('#btnDivide')
let output = document.querySelector('#output')

//functions
function addition (){
    let num1 = document.querySelector('#num1').value
    let num2 = document.querySelector('#num2').value
    let answer = +num1 + +num2;
    output.textContent = answer; //rather use text content to only change the value of the element, not embed another html element. by using innerHtml you can style the element like strong (make it bold)

}

function subtraction () {
    let num1 = document.querySelector('#num1').value
    let num2 = document.querySelector('#num2').value
    let answer = +num1 - +num2
    output.textContent = answer

}

function multiplication (){
    let num1 = document.querySelector('#num1').value
    let num2 = document.querySelector('#num2').value
    let answer = +num1 * +num2
    output.textContent = answer

}

function division (){
    let num1 = document.querySelector('#num1').value
    let num2 = document.querySelector('#num2').value
    let answer = +num1 / +num2
    output.textContent = answer

}

//events
btnCalcSubtract.addEventListener('click', subtraction)
btnCalcAdd.addEventListener('click', addition);
btnCalcMultiply.addEventListener('click', multiplication);
btnCalcDivide.addEventListener('click', division );
