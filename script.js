"use strict";

const button = document.getElementById('btn')
const text = document.getElementById('text')
const range = document.getElementById('range')
const square = document.querySelector('square')
const eButton = document.getElementById('e_btn')
const circle = document.getElementById('circle')


const changeColor = function (event) { 
    let input = this.elements;
    square.style.backgroundColor = text.value;
    text.value = '';
    text.focus();
}
 
button.addEventListener('click', changeColor)

const buttonStyle = function () {
    eButton.style = "display:none;"
}

const rangeChange = function(event) {
    
    circle.textContent = event.target.value
}

range.addEventListener('input', rangeChange)


