const div = document.getElementById('repos');

const name = 'fractial';

fetch(`https://api.github.com/users/${name}/repos`)
.then(response => response.json())
.then(repos => {
    repos.forEach(repo => {
        const a = document.createElement('a');
        a.className = 'repo';
        a.href = `https://github.com/${name}/${repo.name}`;

        const img = document.createElement('img');
        img.setAttribute('box-shadow', '')
        img.src = `https://opengraph.githubassets.com/${Date.now()}/${name}/${repo.name}`;
        img.alt = repo.name

        a.append(img)
        div.appendChild(a);

        VanillaTilt.init(a, {
            max: 16,
            perspective: 1000,
        });
    });
})
.catch(error => console.error(error));