'use strict';

// function duplicate (array) {
//         let newArray = array.reduce((a,b) => {
//             if (!a === b){
//                 a.push(b);
//             }
//             return a;
//         },[])
//     console.log(newArray);
//     return newArray
// }

function setArray(array){
    let set = new Set();
    for (let number of array){
        if (!set.has(number)){
            set.add(number);
        }
    }
    return set;
}

let array = [2,3,5,8,3,1,2,6,3,2,7,8,2,4,7];
console.log(setArray(array));