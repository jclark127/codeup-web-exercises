"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(color) {
    if (color === "blue") {
        return console.log("Blue is the color of the sky.");
    } else if (color === "red") {
        return console.log("Red is the color of an apple.");
    } else if (color === "orange") {
        return console.log("Orange is the color of an orange.");
    } else if (color === "green") {
        return console.log("Green is the color of grass.");
    } else if (color === "yellow") {
        return console.log("Yellow is the color of a banana.");
    } else if (color === "violet") {
        return console.log("Violet is the color of an eggplant.");
    } else if (color === "indigo") {
        return console.log("Indigo is the color of blueberries.");
    } else {
        return console.log("I dont know anything that is " + color);
    }
}

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
analyzeColor(randomColor);

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function analyzeColor(color) {
    switch (color) {
        case "red":
            return ("Red is the color of an apple");
            break;
        case "orange":
            return ("Orange is the color of oranges.");
            break;
        case "yellow":
            return ("Yellow is the color of bananas");
            break;
        case "green":
            return ("Green is the color of grass");
            break;
        case "blue":
            return ("Blue is the color of the sky");
            break;
        case "violet":
            return ("Violet is the color of an eggplant.");
            break;
        case "indigo":
            return ("Indigo is the color of blueberries.");
            break;
        default:
            return ("I do not know anything of that color.");
    }
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
let userColor = prompt("Please enter a color: ").toLowerCase();
alert(analyzeColor(userColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNumber, totalAmnt) {
    if (luckyNumber === 1) {
        return totalAmnt -= totalAmnt * .10;
    } else if (luckyNumber === 2) {
        return totalAmnt -= totalAmnt * .25;
    } else if (luckyNumber === 3) {
        return totalAmnt -= totalAmnt * .35;
    } else if (luckyNumber === 4) {
        return totalAmnt -= totalAmnt * .50;
    } else if (luckyNumber === 5) {
        return 0;
    } else {
        return totalAmnt;
    }
}

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
let luckyNumber = Math.floor(Math.random() * 6);
let billTotal = prompt("Please enter bill total.");
alert("Your lucky number was: " + luckyNumber + "\nYour price before discount was: $" + billTotal + "\n" + "$" + calculateTotal(luckyNumber, billTotal) + " is your new total.");

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
let startFunction = confirm("Would you like to enter a number?");
if (startFunction === true){
    inputValid();
} else {
    alert("Program exited");
}

function inputValid() {
    let keepGoing = true;
    while (keepGoing) {
        let number = prompt("Please enter a number.");
        if (isNaN(parseInt(number))) {
            alert("Please enter valid input.");
        } else {
            alert(isEven(parseInt(number)) + "\n" + plusHundy(parseInt(number)) + "\n" + isPositive(parseInt(number)));
            keepGoing = false;
        }
    }
}

function isEven(number) {
    if (number % 2 === 0) {
        return number + " is even";
    } else {
        return number + " is odd";
    }
}

function plusHundy (number) {
    return number + " plus 100 equals " + (number + 100);
}

function isPositive (number){
    if (number > 0){
        return number + " is positive."
    } else {
        return number + "is negative."
    }
}