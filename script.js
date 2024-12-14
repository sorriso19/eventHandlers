"use strict";

const button = document.getElementById('btn')
const text = document.getElementById('text')
const range = document.getElementById('range')
const square = document.querySelector('#square')
const eButton = document.getElementById('e_btn')
const rangeSpan = document.getElementById('range-span')

const changeColor = function (event) {
   
    square.style.backgroundColor = text.value;
    text.value = '';
    text.focus();
};

button.addEventListener('click', changeColor)

const buttonStyle = function () {
    eButton.style = "display:none;"
};

eButton.addEventListener('click', buttonStyle)

const rangeChange = function (event) {

    rangeSpan.textContent = event.target.value
};

range.addEventListener('input', rangeChange)