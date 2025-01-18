const lastName = 'Duoc'

const sum = (a, b) => a + b

const element = (
  <h1>
    hello, world!. I am {lastName}. I am {sum(10, 16)}
  </h1>
)

// Tên thuộc tính phải chuyển thành camelCase
const element2 = (
  <a href='google.com' tabIndex='11' className='123' id='the-a'>
    Google
  </a>
)

const element3 = <h3 />

const element4 = <img src='' />

const element5 = <input type='text' />

const comment = `<script>console.log("send token")</script>`

const element6 = <h1 className='greeting'>Hello, world!</h1>

// Babel bien dich
const element6 = React.createElement(
  'h1',
  { className: 'greeing' },
  'Hello, world!'
)

const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
}
