const REGEX_EMAIL = /^[a-zA-Z\d\.\-\_]+(\+\d+)?@[a-zA-Z\d\.\-]{1,63}\.[a-zA-Z]{1,5}$/
const REGEX_NAME = /^[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]+((\s[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]+)?)+$/

const isRequired = (value) =>
  value.trim() !== '' ? '' : 'Trường này thì bắt buộc'
const isEmail = (value) =>
  REGEX_EMAIL.test(value) ? '' : 'Email không đúng định dạng'
const isHomanName = (value) =>
  REGEX_NAME.test(value) ? '' : 'Tên không đúng định dạng'
// Currying (HOF)
const min = (num) => (value) =>
  value.length >= num ? '' : `Độ dài tối thiểu là ${num}`
const max = (num) => (value) =>
  value.length <= num ? '' : `Độ dài tối đa là ${num}`
const isSame = (name1, name2) => (value1, value2) =>
  value1 === value2 ? '' : `${name1} không giống ${name2}`

const createMessage = (parentNode, controlNodes, message) => {
  const invalidDiv = document.createElement('div')
  invalidDiv.className = 'invalid-feedback'
  invalidDiv.textContent = message
  parentNode.appendChild(invalidDiv)
  controlNodes.forEach((item) => {
    item.classList.add('is-invalid')
  })
}

const isValid = (param) => {
  const { value, funcs, parentNode, controlNodes } = param
  for (const func of funcs) {
    const message = func(value)
    if (message) {
      createMessage(parentNode, controlNodes, message)
      return message
    }
  }
  return ''
}

const compare = (param) => {
  // destructuring
  const { value1, value2, funcs, parentNode, controlNodes } = param
  for (const func of funcs) {
    const message = func(value1, value2)
    if (message) {
      console.log(value1)
      console.log(value2)
      createMessage(parentNode, controlNodes, message)
      return message
    }
  }
  return ''
}

const clearMessage = () => {
  document.querySelectorAll('.is-invalid').forEach(item => {
    item.classList.remove('is-invalid')
  })
  document.querySelectorAll('.invalid-feedback').forEach(item => {
    item.remove()
  })
}

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault()
  clearMessage()
  const emailNode = document.getElementById('email')
  const nameNode = document.getElementById('name')
  const genderNode = document.getElementById('gender')
  const nationNode = document.querySelector('input[name="nation"]:checked')
  const passwordNode = document.getElementById('password')
  const confirmedPasswordNode = document.getElementById('confirmedPassword')
  const agreeNode = document.querySelector('input#agree:checked')

  const errorForm = [
    isValid({
      value: emailNode.value,
      funcs: [isRequired, isEmail],
      parentNode: emailNode.parentElement,
      controlNodes: [emailNode]
    }),
    isValid({
      value: nameNode.value,
      funcs: [isRequired, isHomanName, max(50)],
      parentNode: nameNode.parentElement,
      controlNodes: [nameNode]
    }),
    isValid({
      value: genderNode.value,
      funcs: [isRequired],
      parentNode: genderNode.parentElement,
      controlNodes: [genderNode]
    }),
    isValid({
      value: nationNode ? nationNode.value : '',
      funcs: [isRequired],
      parentNode: document.querySelector('.form-check-nation:last-child'),
      controlNodes: document.querySelectorAll('input[name="nation"]')
    }),
    isValid({
      value: passwordNode.value,
      funcs: [isRequired, min(8), max(20)],
      parentNode: passwordNode.parentElement,
      controlNodes: [passwordNode]
    }),
    isValid({
      value: confirmedPasswordNode.value,
      funcs: [isRequired, min(8), max(20)],
      parentNode: confirmedPasswordNode.parentElement,
      controlNodes: [confirmedPasswordNode]
    }),
    compare({
      value1: confirmedPasswordNode.value,
      value2: passwordNode.value,
      funcs: [isSame('Nhập lại mật khẩu', 'mật khẩu')],
      parentNode: confirmedPasswordNode.parentElement,
      controlNodes: [confirmedPasswordNode]
    }),
    isValid({
      value: agreeNode ? agreeNode.value : '',
      funcs: [isRequired],
      parentNode: document.getElementById('agree').parentElement,
      controlNodes: [document.getElementById('agree')]
    })
  ]
  const isValidForm = errorForm.every((item) => !item)
  if (isValidForm) {
    alert('Form is Valid')
  }
})
