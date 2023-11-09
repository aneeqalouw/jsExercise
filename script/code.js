
let btnCalc = document.querySelector('#btnAdd')
let output = document.querySelector('#output')


function addition (){
    let num1 = document.querySelector('#num1').value
    let num2 = document.querySelector('#num2').value
    let answer = +num1 + +num2;
    output.innerHTML = answer;

}

btnCalc.addEventListener('click', addition);
