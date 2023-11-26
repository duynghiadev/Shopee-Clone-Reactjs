import http from './http'
import 'bootstrap/scss/bootstrap.scss'

const renderAll = () => {
  return http.readPosts().then((res) => {
    const listNode = document.getElementById('list')
    listNode.innerHTML = ''
    const html = res.reduce((result, current) => {
      result += `
      <div class="card flex-row align-items-center justify-content-between p-2 mb-3">
      <div>
        <p><strong>${current.title}</strong></p>
        <p>${current.description}</p>
      </div>
      <div>
        <button class="btn btn-info btn-start-edit" data-id="${current.id}">Edit</button>
        <button class="btn btn-danger btn-remove" data-id="${current.id}">Remove</button>
      </div>
    </div>
      `
      return result
    }, '')
    listNode.innerHTML = html
  })
}

const add = (title, description) => {
  http.createPost({ title, description }).then((res) => {
    document.getElementById('title').value = ''
    document.getElementById('description').value = ''
    return renderAll()
  }).then(() => {
    alert('Create Successfully')
  })
}

const startEdit = (id) => {
  http.readPost(id).then((res) => {
    document.getElementById('title').value = res.title
    document.getElementById('description').value = res.description
    document.getElementById('btn-group').className =
      'd-flex justify-content-between'
    document.getElementById('btn-add').classList.add('d-none')
    document.getElementById('btn-edit').dataset.id = id
  })
}

const edit = (title, description) => {
  const id = document.getElementById('btn-edit').dataset.id
  http.updatePost(id, { title, description }).then((res) => {
    clearForm()
    return renderAll()
  }).then(() => {
    alert('Update Successfully')
  })
}

const remove = (id) => {
  http.deletePost(id).then((res) => {
    return renderAll()
  }).then(() => {
    alert('Remove Successfully', 'danger')
  })
}

const clearForm = () => {
  document.getElementById('title').value = ''
  document.getElementById('description').value = ''
  document.getElementById('btn-group').className =
    'd-none justify-content-between'
  document.getElementById('btn-add').classList.remove('d-none')
  document.getElementById('btn-edit').dataset.id = ''
}

const alert = (message, type = 'success') =>{
  const alertNode = document.createElement('div')
  alertNode.className = `alert alert-${type}`
  alertNode.textContent = message
  document.getElementById('notification').appendChild(alertNode)
  setTimeout(() => {
    alertNode.remove()
  }, 2000);
}

const init = () => {
  // Render all
  renderAll()

  // Add
  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault()
    const title = document.getElementById('title').value
    const description = document.getElementById('description').value
    add(title, description)
  })

  // Start Edit
  document.getElementById('list').addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-start-edit')) {
      const id = event.target.dataset.id
      startEdit(id)
    }
  })

  // Back
  document.getElementById('btn-back').addEventListener('click', (event) => {
    event.preventDefault()
    clearForm()
  })

  // Edit
  document.getElementById('btn-edit').addEventListener('click', (event) => {
    event.preventDefault()
    const title = document.getElementById('title').value
    const description = document.getElementById('description').value
    edit(title, description)
  })

  // Remove
  document.getElementById('list').addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-remove')) {
      const id = event.target.dataset.id
      const name =
        event.target.parentElement.previousElementSibling.firstElementChild
          .firstElementChild.textContent
      const isConfirmed = confirm(`Do you want to remove '${name}'`)
      if (isConfirmed) {
        remove(id)
      }
    }
  })
}

window.addEventListener('DOMContentLoaded', init)
