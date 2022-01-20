// write a function that accepts a string and checks whether each string is upperCase or lowerCase and returns "letter  [insert letter] is uppercase/lowercase", accordingly.  Bonus: return "is not a character" if it's not a letter

// input example: "bJIENsdfRAIRVIrsRFAijgRar"


let input = "bJIENsdfRARVIrsRFAijgRar";

function checkCase (word){
    for (let i =0; i < word.length; i++){
        if (word[i] === word[i].toUpperCase()) {
            console.log(word[i] + " is upper case.");
        }
        else if (word[i] === word[i].toLowerCase()){
            console.log(word[i] + " is lower case.");
        }
    }
}

checkCase(input);