let string = "codeUp";
reverseString(string);

function reverseString (string){
    let splitString = string.split("");
    let reverseArray = splitString.reverse();
    let newString = reverseArray.join("");
    return console.log(newString);
}