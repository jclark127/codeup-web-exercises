let i = 2;
while (i < 66000 ) {
    console.log(i);
    i += i;
}

let allCones = Math.floor(Math.random() * 50) + 50;
do{
let clientCones = Math.floor(Math.random() * 5) + 1;
if (clientCones > allCones){
    console.log("Cannot sell you " + clientCones + " cones I only have " + allCones);
    continue;
}
allCones -= clientCones;
console.log(clientCones + " cones sold.");
console.log(allCones + " remaining.");

} while (allCones > 0);
console.log("All cones sold. Yay!");