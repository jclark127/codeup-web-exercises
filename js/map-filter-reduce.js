const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
//TODO: Use .filter to create an array of user objects where each user object has at least
// 3 languages in the languages array.

const langArr = users.filter(function (user){
    if(user.languages.length >= 3){
        return user;
    }
});
console.log(langArr);
console.log();

//TODO Use .map to create an array of strings where each element is a user's email address

const emailArray = users.map(function (user){
    return user.email;
});

console.log(emailArray);
console.log();

//TODO Use .reduce to get the total years of experience from the list of users.
// Once you get the total of years you can use the result to calculate the average.



let xpAvg = users.reduce((total, xp) => {
    return total + xp.yearsOfExperience / users.length;
}, 0);

console.log(`Average user years experience: ${xpAvg}`);

console.log();

//TODO Use .reduce to get the longest email from the list of users.
let counter =0;
let longEmail = users.reduce((long, eMail) => {
    return long.length > eMail.email.length ? long : eMail.email;
}, 0);

console.log(longEmail);
console.log()

//TODO Use .reduce to get the list of user's names in a single string.
// Example: Your instructors are: ryan, luis, zach, fernando, justin.

let userString = users.reduce((acc, userName) => {
    return acc === 0 ? userName.name : acc + ", " + userName.name;
},0);

console.log(`Your instructors are: ${userString}`)