const card = document.querySelector('.card')
const container = document.querySelector('.container')
const alertDiv = document.createElement('div')
// alertDiv.className = 'alert alert-success'
alertDiv.classList.add('alert', 'alert-success')
alertDiv.textContent = 'Thanh cong'
container.replaceChild(alertDiv, card)
