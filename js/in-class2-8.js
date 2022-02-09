'use strict';

function setArray(array){
    let set = new Set();
    for (let number of array){
        if (!set.has(number)){
            set.add(number);
        }
    }
    const arr = [...set];


    return arr.sort((a,b) =>{
        return a-b;
    });
}

let array = [1, 12, 2, 33, 28, 5, 45, 12, 1, 42, 42, 5];
console.log(setArray(array));


