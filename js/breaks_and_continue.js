let user = getUserNumber();
console.log("Number to skip is: " + user);
let i = 1;
while (i < 100){
    if (i == user){
        console.log("Yikes! Skipping a number: "  + user);
    }else if (i % 2 !== 0){
        console.log("Here is an odd Number " +i);
    } i++
    if (i === 50) {
        break;
    }
}

//TODO: Add input validation and prompt to add number between 1-50
function getUserNumber() {
    let userNumber = prompt("Enter an odd number.")
    do {
        if (userNumber < 1 || userNumber > 50) {
            alert("Please enter a valid number");
        } else if (userNumber % 2 === 0) {
            alert("Number is even");
        } else if (isNaN(userNumber)) {
            alert("Not a number.");
        } else {
            alert("Valid number.");
            break;
        }
    } while (true);
    return userNumber;
}