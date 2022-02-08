'use strict';

function getGithubUsernames() {
    return fetch('https://api.github.com/',{headers: {'Authorization': GITHUB_TOKEN}})
        .then(response =>
            console.log(response.json()));
}

console.log(getGithubUsernames());