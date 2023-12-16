const container = document.getElementById('repos');

const uuid = length => Array.from({ length }, () => Math.random().toString(36)[2]).join('');

const user = 'fractial';

fetch(`https://api.github.com/users/${user}/repos`)
    .then(response => response.json())
    .then(repos => {
        repos.forEach(repo => {
            const a = document.createElement('a');
            a.href = `https://github.com/${user}/${repo.name}`;

            const img = document.createElement('img');
            img.className = 'repo';
            img.src = `https://opengraph.githubassets.com/${uuid(10)}/${user}/${repo.name}`;
            img.alt = repo.name;

            a.append(img);
            container.appendChild(a);

            VanillaTilt.init(a, {
                max: 2.5,
                perspective: 1000,
            });
        });
    })
    .catch(error => console.error('Error:', error));