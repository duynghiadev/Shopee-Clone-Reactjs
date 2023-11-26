class Ui {
  render(profile, repos) {
    const _main = document.querySelector('main')
    if(_main) {
      _main.remove()
    }
    const main = document.createElement('main')
    main.className = 'mb-5'
    const cards = repos.reduce((result, current) => {
      result += `
      <div class="card p-2 mb-3">
      <a href="${current.html_url}" target="_blank" class="mb-3 fs-4">
        ${current.name}
      </a>
      <p class="mb-3">${current.description}</p>
      <div>
        <span class="badge bg-primary">${current.language}</span>
        <span class="badge bg-info">Star: ${current.stargazers_count}</span>
        <span class="badge bg-success">Fork: ${current.forks_count}</span>
      </div>
    </div>
      `
      return result
    }, '')

    main.innerHTML = `
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <figure>
            <img src="${profile.avatar_url}" style="width: 150px; height: 150px; object-fit: cover;">
          </figure>
          <h1 class="fs-3">
          ${profile.login}
          </h1>
          <p>${profile.bio}</p>
          <a href="${profile.html_url}" target="_blank" class="btn btn-primary">
            View Profile
          </a>
          <div class="mb-3">
            <span class="badge bg-primary">Following: ${profile.following}</span>
            <span class="badge bg-info">Repos: ${profile.public_repos}</span>
            <span class="badge bg-success">Followers: ${profile.followers}</span>
          </div>
          <ul class="list-group">
            <li class="list-group-item">
              Website: <a href="${profile.blog}" target="_blank">${profile.blog}</a>
            </li>
            <li class="list-group-item">
              Location: ${profile.location}
            </li>
            <li class="list-group-item">
              Created at: ${profile.created_at}
            </li>
            <li class="list-group-item">
              Twitter: ${profile.twitter_username}
            </li>
          </ul>
        </div>
        <div class="col-sm-8">
          <h2>Repositories</h2>
          ${cards}
        </div>
      </div>
    </div>
    `
    document.body.insertBefore(main, document.querySelector('footer'))
  }
  alert(message, type='danger') {
    const alertNode= document.createElement('div')
    alertNode.className = `alert alert-${type}`
    alertNode.textContent = message
    document.getElementById('notification').appendChild(alertNode)
    setTimeout(() => {
      alertNode.remove()
    }, 2000);
  }
}
