import wallpaper from './images/pexels-maxime-francis.jpg'
import bitcoinWhitepaper from './pdfs/bitcoin.pdf'

const domHandler = () => {
  console.log(wallpaper)
  console.log(bitcoinWhitepaper)
  document.body.style.backgroundImage = `url(${wallpaper})`
  const link = document.createElement('a')
  link.href = bitcoinWhitepaper + '#page=4'
  link.textContent = 'Bitcoin Whitepaper'
  document.body.appendChild(link)
}

export default domHandler
