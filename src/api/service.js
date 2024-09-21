const basePath = 'https://api.github.com'

export class APIService {
  constructor() {}

  async fetchProfile(username) {
    const data = await fetch(`${basePath}/users${username}`)
    return data.json()
  }

  async fetchRepos(username) {
    const data = await fetch(`${basePath}/users/${username}/repos`)
    return data.json()
  }
}
