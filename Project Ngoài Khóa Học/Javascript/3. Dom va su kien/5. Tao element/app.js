const card = document.createElement('div')
// card.className = 'card p-2 mb-3'
card.classList.add('card', 'p-2', 'mb-3')
card.setAttribute('id', 'duoc')
// card.textContent = 'Mình tên là Được'
card.innerHTML = '<strong>Mình tên là Được</strong>'

const container = document.querySelector('.container')
container.appendChild(card)
