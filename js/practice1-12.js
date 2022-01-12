"use strict";

var weather = "the weather is cold today.";


var paragraph = document.getElementsByClassName("parag");


for (let i=0; i < paragraph.length; i++) {
    paragraph[i].innerHTML = weather;
}