const VALUES = [
  { id: 'scissors', value: '✌️' },
  { id: 'rock', value: '✊' },
  { id: 'paper', value: '🖐' }
]

let i = 0

const handleChange = () => {
  const computer = document.getElementById('computer')
  computer.textContent = VALUES[i].value
  computer.dataset.id = VALUES[i].id
  if (i === VALUES.length - 1) {
    i = 0
  } else {
    i++
  }
}

let interval = setInterval(handleChange, 100)

const compare = (user, computer) => {
  const indexUser = VALUES.findIndex((item) => item.id === user)
  const indexComputer = VALUES.findIndex((item) => item.id === computer)
  const check = indexUser - indexComputer
  if ([1, -2].includes(check)) {
    return 1
  } else if ([-1, 2].includes(check)) {
    return -1
  } else {
    return 0
  }
}


// User click
document.querySelectorAll('.user').forEach((btn) => {
  btn.addEventListener('click', (event) => {
    clearInterval(interval)
    event.target.classList.add('active')
    const valueComputer = document.getElementById('computer').dataset.id
    const valueUser = event.target.id
    const result = compare(valueUser, valueComputer)

    const alert = document.createElement('div')
    alert.classList.add('alert', 'text-center')
    let message = ''
    if (result === 1) {
      message = 'Bạn đã chiến thắng!'
      alert.classList.add('alert-success')
    } else if (result === -1) {
      message = 'Bạn đã thua cuộc!'
      alert.classList.add('alert-dark')
    } else {
      message = 'Bạn đã hòa!'
      alert.classList.add('alert-warning')
    }
    alert.textContent = message
    document.getElementById('notification').appendChild(alert)
    document.getElementById('play-again').classList.remove('d-none')

    // Prevent User click
    document.querySelectorAll('.user').forEach(_btn => {
      _btn.style.pointerEvents = 'none'
    })

  })
})

// Play Again
document.querySelector('.btn-play-again').addEventListener('click', ()  => {
  // Computer start change
  interval = setInterval(handleChange, 100)
  // User can click
  document.querySelectorAll('.user').forEach(_btn => {
    _btn.style.pointerEvents = ''
  })
  // Reset notification
  document.getElementById('notification').innerHTML = ''
  // Reset active button
  document.querySelector('.user.active').classList.remove('active')
  // Hide play-again button
  document.getElementById('play-again').classList.add('d-none')
})

