'use strict';

function checkVowel (string){
    let count = string.match(/[aeiou]/gi).length;
    return count;
}

console.log(checkVowel('How many vowels are in this sentence?'));
