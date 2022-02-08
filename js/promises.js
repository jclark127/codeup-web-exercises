'use strict';

function getRecentCommit(user) {
    return fetch(`https://api.github.com/repos/${user}/codeup-web-exercises/commits`, {headers: {'Authorization': GITHUB_TOKEN}})
        .then(response => response.json())
        .then(result => {
            let latestCommit = result[0].commit.author.date.substring(0, 10)
            console.log(`Most recent commit for user: ${user} date: ${latestCommit}.`);
            alert(`Most recent commit for user: ${user} date: ${latestCommit}.`);
        })
}


let gitUser = "jclark127";

// getRecentCommit(gitUser);


function wait(number) {
    return new Promise((resolve, reject) => {
        if (number > 10) {
            reject("Number is too big.");
        }
        setTimeout(() => {
            if (number < 10) {
                resolve("Number was reasonable");
            }
        }, (number * 1000));
    });
}

let number = prompt("Enter a number between 1-10");
wait(number).then((result) => {
    console.log(result)
    alert(`You\'ll see this after ${number} second(s).`);
}).catch(result => console.log(result));
