"use strict";

const button = document.getElementById('btn')
const text = document.getElementById('text')
const range = document.getElementById('range')
const square = document.querySelector('#square')
const eButton = document.getElementById('#e_btn')


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

// const rangeChange = function(event) {

// }

// range.addEventListener('input', rangeChange)


