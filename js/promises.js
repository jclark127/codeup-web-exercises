'use strict';

function getRecentCommit(user) {
    return fetch(`https://api.github.com/repos/${user}/codeup-web-exercises/commits`,{headers: {'Authorization': GITHUB_TOKEN}})
        .then(response => response.json())
        .then(result =>{
            let latestCommit = result[0].commit.author.date.substring(0,10)
            console.log(`Most recent commit for user: ${user} date: ${latestCommit}.`);
            alert(`Most recent commit for user: ${user} date: ${latestCommit}.`);
        })
}


let gitUser = "jclark127";
getRecentCommit(gitUser);