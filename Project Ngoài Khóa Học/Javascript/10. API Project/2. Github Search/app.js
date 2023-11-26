window.addEventListener('DOMContentLoaded', () => {
  document
    .getElementById('form-search')
    .addEventListener('submit', async (event) => {
      event.preventDefault()
      const ui = new Ui()
      const username = document.getElementById('username').value
      try {
        const { profile, repos } = await new Api().getInfo(username)
        ui.render(profile, repos)
        ui.alert('Tìm thấy user', 'success')
      } catch (error) {
        ui.alert(error)
      }
    })
})
