"use strict";

let weather = "sunny";

if (weather === "sunny"){
    console.log("wear a shirt");
} else if (weather === "snowy"){
    console.log("wear a jacket.");
} else if (weather === "rainy"){
    console.log("Bring an umbrella");
} else {
    console.log("Be naked.");
}
console.log();

let myAge = 31;
let actualAge = 21;
checkAge(myAge,actualAge);


function checkAge (myAge, actualAge){
    if (myAge === actualAge){
        console.log(myAge + " is my actual age.");
    } else {
        console.log(actualAge + " is not my actual age.");
    }
}
console.log();

let jcGrade = 100;
let billGrade = 80;
let charlieGrade = 1;
let jeronGrade = 70;
let amandaGrade = 0;


function letterGrade(grade){

    if (grade >= 90){
        return "A";
    }else if (grade >= 80 && grade < 90) {
        return  "B";
    }else if (grade <80 && grade >=70){
        return "C";
    }else if (grade <70 && grade >=60){
        return "D";
    } else {
        return "F";
    }
}

console.log("JC's letter grade: ", letterGrade(jcGrade));
console.log("Bill's letter grade: ",letterGrade(billGrade));
console.log("Charlie's letter grade: ",letterGrade(charlieGrade));
console.log("Jeron's letter grade: ",letterGrade(jeronGrade));
console.log("Amanda's letter grade: ",letterGrade(amandaGrade));