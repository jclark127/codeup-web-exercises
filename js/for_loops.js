function showMultiplicationTable(x) {
    for (let i = 1; i <= 10; i++) {
        console.log("7 x " + i + " = " + (i * x));
    }
}
let x = 7;
showMultiplicationTable(x);
console.log();

let rand = 0;
for (let i = 0; i <= 10; i++) {
    rand = Math.floor(Math.random() * 180 + 20);
    console.log(isEven(rand));
}

function isEven(number) {
    if (number % 2 === 0) {
        return number + " is even";
    } else if (isNaN(number)) {
        return "please enter valid input";
    } else {
        return number + " is odd";
    }
}

console.log();
let str = "";
for (let i = 1; i < 10; i++) {
    for (let j = 0; j < i; j++) {
        str += i;
    }
    str += "\n";
}
console.log(str);
console.log();

for (let i = 100; i > 0; i -= 5) {
    console.log(i);
}

