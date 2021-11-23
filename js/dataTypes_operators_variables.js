//Exercise 1

var a = 1;
var b = a++;
var c = ++a;
// what is the value of a, b, and c?
console.log(a);

console.log(b);

console.log(c);

var d = "hello";
var e = false;

d++;
e++;

console.log(d);
console.log(e);

var perplexed; // perplexed is undefined (no value is assigned)
console.log(perplexed + 2);

console.log(isNaN(0));

console.log(isNaN(1));

console.log(isNaN(""));

console.log(isNaN("string"));

console.log(isNaN("0"));

console.log(isNaN("1"));

console.log(isNaN("3.145"));

console.log(isNaN(Number.MAX_VALUE));

console.log(isNaN(Infinity));

console.log(isNaN("true"));

console.log(isNaN(true));

console.log(isNaN("false"));

console.log(isNaN(false));

// to illustrate why the isNaN() function is needed:
console.log(NaN == NaN);


//Exercise 2

var sample = "Hello Codeup";

console.log(sample);

var sampLength = sample.length;

console.log (sampLength);

sample += " Students.";

console.log(sample);
//Missed "Replace Students with Class" portion of exercise on initial push to git
console.log(sample.replace("Students.", "Class."));

console.log(sample.indexOf("c")); // Gives out of bounds index?

console.log(sample.indexOf("C"));

console.log(sample.substr(6, 6));

//Exercise 3

//Exercise 3.1

var mermaid = 3;
var bear = 5;
var herc = 1;

var totalCost = (mermaid + bear + herc) * 3;

console.log(totalCost);

//Exercise 3.2

var googPay = 400;
var amazPay = 380;
var metaPay = 350;

console.log("Google pay: $" + (googPay * 6));
console.log("Amazon pay: $" + (amazPay * 4));
console.log("Facebook pay: $" +(metaPay * 10));

//Exercise 3.3

var classFull = true;
var classOnTues = true;

if (classOnTues && classFull === true){
    console.log("Cannot enroll in class");
} else
console.log("Can enroll in class");

//missed this section in initial push to git
var premiumMember = true;
var offerExpired = false;
var minItems = 2;

var applyOffer = offerExpired && minItems > 2 || premiumMember && minItems >=2;

console.log(applyOffer);

//Exercise 3.4

var username = 'codeup';
var password = 'notastrongpassword';

var passLength = password.length >= 5;
console.log(passLength);

var passUser = !password.includes(username.toLowerCase());
console.log(passUser);

var userLength = username.length <= 20;
console.log(userLength);

var noWhiteSpace = !(password.startsWith(" ") && password.endsWith(" ") && username.startsWith(" ") && username.endsWith(" "));

console.log(noWhiteSpace);


