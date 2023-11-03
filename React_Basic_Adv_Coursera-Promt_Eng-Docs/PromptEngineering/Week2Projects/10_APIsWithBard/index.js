// const url = `https://api.github.com/repos/facebook/react/issues`;
// const issuesList = document.querySelector('.issues-list');

// fetch(url, {
//   method: 'GET',
//   headers: {
//     'Accept': 'application/json',
//   },
// })
//   .then(response => response.json())
//   .then(issues => {
//      issues.forEach(issue => {
//         const issueListItem = document.createElement('li');
//         issueListItem.textContent = issue.title;
//         issuesList.appendChild(issueListItem);
//      });
//   });

// const url = `https://api.github.com/repos/freecodecamp/freecodecamp`;

// fetch(url, {
//   method: 'GET',
//   headers: {
//     'Accept': 'application/json',
//   },
// })
//   .then(response => response.json())
//   .then(repo => {
//     const starCount = repo.stargazers_count;
//     console.log(starCount);
//   }); 

function getTopRepositories(searchTerm) {
  const url = `https://api.github.com/search/repositories?q=${searchTerm}&per_page=5`;

  return fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  })
    .then(response => response.json())
    .then(results => {
      const repositories = results.items;

      const topRepositories = repositories.slice(0, 5);

      for (const repository of topRepositories) {
        const full_name = repository.full_name;
        const stargazers_count = repository.stargazers_count;
        const url = repository.url;

        console.log(`
          Repository name: ${full_name}
          Star count: ${stargazers_count}
          Repository URL: ${url}
        `);
      }
    });
}

getTopRepositories("react");