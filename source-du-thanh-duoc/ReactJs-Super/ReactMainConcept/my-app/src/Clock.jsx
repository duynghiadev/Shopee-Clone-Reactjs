import React from 'react'

const lists = ['BMW', 'Toyota', 'Honda']

const fetchApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(lists)
    }, 1000)
  })
}

export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    console.log('constructor')
    this.state = {
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: {
        created: new Date().getSeconds()
      },
      name: this.props.name,
      lists: [],
      darkMode: false
    }
    this.date = '22/8/2022'
    this.getTime = this.getTime.bind(this)
  }

  componentDidMount() {
    const seconds = document.getElementById('seconds')
    console.log('componentDidMount')

    fetchApi().then((res) =>
      this.setState((prevState) => ({
        ...prevState,
        lists: res
      }))
    )
  }

  componentDidUpdate() {
    // if (this.state.darkMode) {
    //   const value = document.querySelector('input').value
    //   console.log('Value in Input', value)
    // }
    console.log('componentDidUpdate')
    if (this.state.lists.length === 0) {
      fetchApi().then((res) =>
        this.setState((prevState) => ({
          ...prevState,
          lists: res
        }))
      )
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  getTime() {
    // previousState.time !== newState.time
    // previousState.time.created !== newState.time.created

    const newState = {
      ...this.state,
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: { created: new Date().getSeconds() }
    }
    this.setState(newState)
  }

  toggleDarkMode = () => {
    this.setState((prevState) => ({
      ...prevState,
      darkMode: !prevState.darkMode
    }))
  }

  render() {
    console.log('render')
    return (
      <div>
        <h1>Hello, world! {this.state.name}</h1>
        <h2>It is {this.state.time.created}</h2>
        <h2 id='seconds'>It is {this.state.seconds.created}</h2>
        <h3>Is is {this.date}</h3>
        <button onClick={this.getTime}>Get Time</button>
        <button onClick={this.toggleDarkMode}>Toggle</button>
        {this.state.darkMode && (
          <input value={this.state.darkMode} type='text' />
        )}
      </div>
    )
  }
}
