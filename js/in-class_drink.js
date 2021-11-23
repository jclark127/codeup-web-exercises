let isAtBar = true;
let bac = .00;
let age = 22;
let cashOnHand = 9;


let canHaveADrink = ((isAtBar||!isAtBar) && bac < .08 && age >= 21 && cashOnHand >= 5.00); // true && false && true && true --> false

if (canHaveADrink){ // true or false
    console.log("Have a brewski my dude!");
}else{ // it was not true
    console.log("Sorry buddy, no brew for u");
}