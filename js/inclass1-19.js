//jquery practice

"use strict"

// // let heading = document.getElementById("heading");
// // heading.innerHTML = "hello world again";
// let parag = $("#p1");
// console.log(parag.text());
//
// let heading = $("#heading");
//
// console.log(heading.text());


// var i = 0;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }
//
// for (var i = 0; i <= 10; i++){
//     console.log(i);
// }
//
// if (!!true){
//     console.log("true");
// }

var array = ['John', 'Paul', 'George', 'Ringo', 'Santana'];


console.log(array[array.length - 2]);

console.log(array[array.length - 3]);


console.log(array[2]);

array.unshift("yoko");
console.log(array);
array.push("other yoko");
console.log(array);
array.splice(array.indexOf('Ringo'), 0, 'Yoko3');
console.log(array);

let band = {
    shred: function(){
        console.log("RAAAAAAAAAAAAAA");
    }
}

band.shred();

var band2 = {};

band2.shred = function(){
    console.log("AAAAAAAAAAAAAAR");
}

band2.shred();

// var i = 0;
// while(i > 10) {
//     console.log(i);
//     i++;
// }

console.log();


// i = 10;
// while(i < 10) {
//     console.log(i);
// }

console.log();

let i = 0;
while(i <= 10) {
    console.log(i);
    i++;
}
//
//
// let i = 0;
// while(i < 10) {
//     console.log(i);
//     i--;
// }

alert("what is your favorite color?");
confirm("what is your favorite color");
prompt("what is your favorite color?");


