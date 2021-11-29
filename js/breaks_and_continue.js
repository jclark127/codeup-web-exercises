let user = 27;
console.log("Number to skip is: " + user);
let i = 1;
while (i < 100){
    if (i === user){
        console.log("Yikes! Skipping a number: "  + user);
    }else if (i % 2 !== 0){
        console.log(i);
    } i++
    if (i === 50) {
        break;
    }
}