const navtabBtns = document.querySelectorAll('.navtab-btn')
const tabContentItems = document.querySelectorAll('.tab-content-item')
navtabBtns.forEach(btn => {
  btn.addEventListener('click', event =>{ 
    // Active Button
    navtabBtns.forEach(_btn => _btn.classList.remove('active'))
    event.target.classList.add('active')

    // Active Tab Content Item
    tabContentItems.forEach(contentItem => contentItem.classList.remove('active'))
    document.querySelector(`.tab-content-item[data-tab='${event.target.id}']`).classList.add('active')
  })
})