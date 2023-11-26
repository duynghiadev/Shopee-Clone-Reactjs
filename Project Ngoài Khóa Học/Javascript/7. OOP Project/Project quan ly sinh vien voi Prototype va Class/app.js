// Prototype
// function Student(name, birthday) {
//   this.name = name
//   this.birthday = birthday
//   this.id = new Date().toISOString()
// }

// function UI() {}
// UI.prototype.add = function (student) {
//   const store = new Store()
//   const students = store.getStudents()
//   const tr = document.createElement('tr')
//   tr.innerHTML = `
//   <td>${students.length + 1}</td>
//   <td>${student.name}</td>
//   <td>${student.birthday}</td>
//   <td>
//     <button class="btn btn-sm btn-danger btn-remove" data-id="${
//       student.id
//     }">Xóa</button>
//   </td>
//   `
//   document.querySelector('table tbody').appendChild(tr)
//   document.getElementById('name').value = ''
//   document.getElementById('birthday').value = ''
// }
// UI.prototype.renderAll = function () {
//   const store = new Store()
//   const students = store.getStudents()
//   let html = students.reduce((result, current, currentIndex) => {
//     return (
//       result +
//       `
//     <tr>
//       <td>${currentIndex + 1}</td>
//       <td>${current.name}</td>
//       <td>${current.birthday}</td>
//       <td>
//       <button class="btn btn-sm btn-danger btn-remove" data-id="${
//         current.id
//       }">Xóa</button>
//       </td>
//     </tr>
//     `
//     )
//   }, '')
//   document.querySelector('table tbody').innerHTML = html
// }
// UI.prototype.clear = function () {
//   document.querySelector('table tbody').innerHTML = ''
// }
// UI.prototype.alert = function(message, type = 'success') {
//   const alert = document.createElement('div')
//   alert.className = `alert alert-${type}`
//   alert.textContent = message
//   document.getElementById('notification').appendChild(alert)
//   setTimeout(() => {
//     alert.remove()
//   }, 2000);
// }

// function Store() {}
// Store.prototype.getStudents = function () {
//   return JSON.parse(localStorage.getItem('students')) || []
// }
// Store.prototype.add = function (student) {
//   const students = this.getStudents()
//   students.push(student)
//   localStorage.setItem('students', JSON.stringify(students))
// }
// Store.prototype.remove = function (id) {
//   const students = this.getStudents()
//   const index = students.findIndex((student) => student.id === id)
//   students.splice(index, 1)
//   localStorage.setItem('students', JSON.stringify(students))
// }
// Store.prototype.getStudent = function (id) {
//   return this.getStudents().find((student) => student.id === id)
// }

// Class
class Student {
  constructor(name, birthday) {
    this.name = name
    this.birthday = birthday
    this.id = new Date().toISOString()
  }
}

class UI {
  add(student) {
    const store = new Store()
    const students = store.getStudents()
    const tr = document.createElement('tr')
    tr.innerHTML = `
  <td>${students.length + 1}</td>
  <td>${student.name}</td>
  <td>${student.birthday}</td>
  <td>
    <button class="btn btn-sm btn-danger btn-remove" data-id="${
      student.id
    }">Xóa</button>
  </td>
  `
    document.querySelector('table tbody').appendChild(tr)
    document.getElementById('name').value = ''
    document.getElementById('birthday').value = ''
  }
  renderAll() {
    const store = new Store()
    const students = store.getStudents()
    let html = students.reduce((result, current, currentIndex) => {
      return (
        result +
        `
      <tr>
        <td>${currentIndex + 1}</td>
        <td>${current.name}</td>
        <td>${current.birthday}</td>
        <td>
        <button class="btn btn-sm btn-danger btn-remove" data-id="${
          current.id
        }">Xóa</button>
        </td>
      </tr>
      `
      )
    }, '')
    document.querySelector('table tbody').innerHTML = html
  }
  clear() {
    document.querySelector('table tbody').innerHTML = ''
  }
  alert(message, type = 'success') {
    const alert = document.createElement('div')
    alert.className = `alert alert-${type}`
    alert.textContent = message
    document.getElementById('notification').appendChild(alert)
    setTimeout(() => {
      alert.remove()
    }, 2000)
  }
}

class Store {
  getStudents() {
    return JSON.parse(localStorage.getItem('students')) || []
  }
  add(student) {
    const students = this.getStudents()
    students.push(student)
    localStorage.setItem('students', JSON.stringify(students))
  }
  remove(id) {
    const students = this.getStudents()
    const index = students.findIndex((student) => student.id === id)
    students.splice(index, 1)
    localStorage.setItem('students', JSON.stringify(students))
  }
  getStudent(id) {
    return this.getStudents().find((student) => student.id === id)
  }
}

// Add
document.querySelector('form').addEventListener('submit', (event) => {
  const store = new Store()
  const ui = new UI()
  event.preventDefault()
  const name = document.getElementById('name').value
  const birthday = document.getElementById('birthday').value
  const student = new Student(name, birthday)
  ui.add(student)
  store.add(student)
  ui.alert(`Bạn vừa thêm thành công ${name}`)
})
// Init
window.addEventListener('DOMContentLoaded', () => {
  const ui = new UI()
  ui.renderAll()
})
// Remove
document.querySelector('table tbody').addEventListener('click', (event) => {
  if (event.target.classList.contains('btn-remove')) {
    const store = new Store()
    const ui = new UI()
    const id = event.target.dataset.id
    const student = store.getStudent(id)
    const isConfirmed = confirm(`Bạn có muốn xóa sinh viên ${student.name}`)
    if (isConfirmed) {
      store.remove(id)
      ui.clear()
      ui.renderAll()
      ui.alert(`Bạn vừa xóa thành công ${student.name}`)
    }
  }
})
