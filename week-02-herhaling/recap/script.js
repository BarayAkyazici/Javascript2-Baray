let input = document.querySelector('#input');
let output = document.querySelector('#output');
let butten = document.querySelector('#btn');

let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let buttonCalc = document.querySelector('#buttonCalc');
let outputCalc = document.querySelector('#outputcalc');

butten.addEventListener('click', function(){
    butten.style.backgroundColor = 'green';

    output.textContent = input.value;
    output.style.color = 'green';
    input.value = '';
});

buttonCalc.addEventListener('click', function(){
    outputCalc.textContent = calculator(input1.value, input2.value)

    input1.value = '';
    input2.value = '';
});


function calculator(a, b){
    return a * b;
}