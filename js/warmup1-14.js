"use strict";

let arr = ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"];
let newArr = [];

for (var i=0; i < arr.length; i ++){
    if (arr[i].length === 4){
        newArr.push(arr[i]);
    }
}
console.log(arr);
console.log(newArr);