class Http {
  constructor() {
    this.api = 'https://60794f85460a6600174fb776.mockapi.io/articles'
    this.headers = {
      'Content-Type': 'application/json'
    }
  }
  readPosts() {
    return fetch(this.api, {
      method: 'GET',
      headers: this.headers
    }).then((res) => res.json())
  }
  
  readPost(id) {
    return fetch(`${this.api}/${id}`, {
      method: 'GET',
      headers: this.headers
    }).then((res) => res.json())
  }

  createPost(body) {
    return fetch(this.api, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: this.headers
    }).then((res) => res.json())
  }

  updatePost(id, body) {
    return fetch(`${this.api}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: this.headers
    }).then((res) => res.json())
  }

  deletePost(id) {
    return fetch(`${this.api}/${id}`, {
      method: 'DELETE',
      headers: this.headers
    }).then((res) => res.json())
  }
}

export default new Http()