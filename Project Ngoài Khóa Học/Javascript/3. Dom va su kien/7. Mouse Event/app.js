// document.getElementById('add').addEventListener('click', event => {
//   const value = document.getElementById('name').value
//   const card = document.createElement('div')
//   card.className = 'card mb-3 p-2'
//   card.textContent = value
//   document.querySelector('.list').appendChild(card)
// })

// document.querySelector('form').addEventListener('submit', event => {
//   event.preventDefault()
//   const value = document.getElementById('name').value
//   const card = document.createElement('div')
//   card.className = 'card mb-3 p-2'
//   card.textContent = value
//   document.querySelector('.list').appendChild(card)
// })

// document.getElementById('add').addEventListener('dblclick', event => {
//   const value = document.getElementById('name').value
//   const card = document.createElement('div')
//   card.className = 'card mb-3 p-2'
//   card.textContent = value
//   document.querySelector('.list').appendChild(card)
// })

function handleMouseOver() {
  document.getElementById('add').className = 'btn btn-danger'
}

function handleMouseOut() {
  document.getElementById('add').className = 'btn btn-primary'
}
