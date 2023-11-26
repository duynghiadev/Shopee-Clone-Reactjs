const ItemController = (function () {
  function Item(name, amount) {
    this.name = name
    this.amount = amount
    this.id = new Date().toISOString()
  }
  function createItem(name, amount) {
    return new Item(name, amount)
  }
  return {
    createItem
  }
})()

const UIController = (function () {
  function add(item) {
    const card = document.createElement('div')
    card.className =
      'card p-2 flex-row align-items-center justify-content-between mb-3'
    card.innerHTML = `
    <p>
      ${item.name}:
      <strong>${item.amount}</strong>
    </p>
    <button class="btn btn-small btn-info btn-start-edit" data-id="${item.id}">
      Sửa
    </button>
    `
    document.querySelector('.list').appendChild(card)
    document.getElementById('name').value = ''
    document.getElementById('amount').value = ''
    renderTotal()
  }
  function renderAll() {
    const list = LSController.getList()
    document.querySelector('.list').innerHTML = ''
    list.forEach((item) => {
      add(item)
    })
    renderTotal()
  }
  function renderTotal() {
    document.getElementById(
      'total'
    ).innerText = `Tổng chi phí: ${LSController.getTotal()}`
  }
  function startEdit(id) {
    const item = LSController.getItem(id)
    document.getElementById('btn-group').className =
      'd-flex justify-content-between'
    document.getElementById('btn-add').classList.add('d-none')
    document.getElementById('btn-edit').dataset.id = item.id
    document.getElementById('btn-remove').dataset.id = item.id
    document.getElementById('name').value = item.name
    document.getElementById('amount').value = item.amount
  }
  function resetForm() {
    document.getElementById('name').value = ''
    document.getElementById('amount').value = ''
    document.getElementById('btn-edit').dataset.id = ''
    document.getElementById('btn-remove').dataset.id = ''
    document.getElementById('btn-group').className =
      'd-none justify-content-between'
    document.getElementById('btn-add').classList.remove('d-none')
  }
  return {
    add,
    renderAll,
    startEdit,
    resetForm
  }
})()

const LSController = (function () {
  function add(item) {
    const list = getList()
    list.push(item)
    localStorage.setItem('list', JSON.stringify(list))
  }
  function getList() {
    return JSON.parse(localStorage.getItem('list')) || []
  }
  function getTotal() {
    const total = getList().reduce((result, current) => {
      return result + Number(current.amount)
    }, 0)
    return total.toLocaleString()
  }
  function getItem(id) {
    return getList().find((item) => item.id === id)
  }
  function edit(id, { name, amount }) {
    const list = getList()
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        list[i].name = name
        list[i].amount = amount
        break
      }
    }
    localStorage.setItem('list', JSON.stringify(list))
  }
  function remove(id) {
    const list = getList()
    const index = list.findIndex((item) => item.id === id)
    list.splice(index, 1)
    localStorage.setItem('list', JSON.stringify(list))
  }
  function removeAll() {
    localStorage.removeItem('list')
  }
  return {
    add,
    getList,
    getTotal,
    getItem,
    edit,
    remove,
    removeAll
  }
})()

const App = (function () {
  function init() {
    // Render All
    UIController.renderAll()

    // Add
    document.querySelector('form').addEventListener('submit', (event) => {
      event.preventDefault()
      const name = document.getElementById('name').value
      const amount = document.getElementById('amount').value
      const item = ItemController.createItem(name, amount)
      LSController.add(item)
      UIController.add(item)
    })

    // Start Edit
    document.querySelector('.list').addEventListener('click', (event) => {
      if (event.target.classList.contains('btn-start-edit')) {
        const id = event.target.dataset.id
        UIController.startEdit(id)
      }
    })

    // Edit
    document.getElementById('btn-edit').addEventListener('click', (event) => {
      event.preventDefault()
      const name = document.getElementById('name').value
      const amount = document.getElementById('amount').value
      const id = document.getElementById('btn-edit').dataset.id
      LSController.edit(id, { name, amount })
      UIController.renderAll()
      UIController.resetForm()
    })

    // Back
    document.getElementById('btn-back').addEventListener('click', (event) => {
      event.preventDefault()
      UIController.resetForm()
    })

    // Remove
    document.getElementById('btn-remove').addEventListener('click', (event) => {
      event.preventDefault()
      const id = document.getElementById('btn-remove').dataset.id
      const item = LSController.getItem(id)
      const isConfirmed = confirm(`Bạn có muốn xóa "${item.name}"`)
      if (isConfirmed) {
        LSController.remove(id)
        UIController.renderAll()
        UIController.resetForm()
      }
    })

    // Remove all
    document.getElementById('btn-remove-all').addEventListener('click', () => {
      const isConfirmed = confirm(`Bạn có muốn xóa tất cả`)
      if(isConfirmed) {
        LSController.removeAll()
        UIController.renderAll()
      }
    })
  }
  return {
    init
  }
})()

window.addEventListener('DOMContentLoaded', App.init)
