class Api {
  constructor() {
    this.client_id = '545c259a7d0ecedf77b4'
    this.client_secret = 'c64bffb8ec8bc20ffea3bd05f1711b8d59809d90'
  }

  async getInfo(username) {
    const getProfile = fetch(`https://api.github.com/users/${username}?
    client_id=${this.client_id}&client_secret=${this.client_secret}`).then(
      (res) =>
        res.json().then((json) => {
          if (res.ok) {
            return json
          }
          throw json.message
        })
    )
    const getRepos = fetch(`https://api.github.com/users/${username}/repos?client_id=${this.client_id}&cl
    ient_secret=${this.client_secret}`).then((res) =>
      res.json().then((json) => {
        if (res.ok) {
          return json
        }
        throw json.message
      })
    )

    const [profile, repos] = await Promise.all([getProfile, getRepos])
    return {
      profile,
      repos
    }
  }
}
