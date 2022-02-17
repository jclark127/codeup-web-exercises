'use strict';

function checkVowel(string) {
    let count = string.match(/[aeiou]/gi).length;
    return count;
}

console.log(checkVowel('How many vowels are in this sentence?'));

let arr = "adsjfdsfsfjsdjfhacabcsbajda";
let newArr = [];

for (let i = 0; i < arr.length; i++){
    let count = 0;
    for (let j = i + 1;j < arr.length; j++) {
        if (arr[i].includes(arr[j])) {
            count++;
            if (count !== 1) {
                if (!newArr.contains(arr[i]) || newArr[i] === "")
                newArr.push(`${arr[i]}: ${count}`);
            }
        }
    }
}
 console.log(newArr);
