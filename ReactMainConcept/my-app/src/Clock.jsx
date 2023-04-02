import React from "react";

const lists = ["BMW", "Toyota", "Honda"];

const fetchApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(lists);
    }, 1000);
  });
};

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: {
        created: new Date().toLocaleTimeString(),
      },
      seconds: {
        created: new Date().getSeconds(),
        end: 121212,
      },
      lists: [],
    };
    this.date = "3/4/2023";
    this.getTime = this.getTime.bind(this);
  }

  componentDidMount() {
    const seconds = document.getElementById("seconds");
    console.log(seconds);

    fetchApi().then((res) =>
      this.setState((prevState) => ({
        ...prevState,
        lists: res,
      }))
    );
  }

  getTime() {
    const newState = {
      ...this.state, // spread operator
      time: {
        created: new Date().toLocaleTimeString(),
      },
      seconds: { created: new Date().getSeconds() },
    };
    this.setState(newState);
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Hello, world!, {this.props.name}</h1>
        <h2>It is {this.state.time.created}</h2>
        <h2 id="seconds">It is {this.state.seconds.created}</h2>
        <h2>It is {this.date}</h2>
        <button onClick={this.getTime}>Get Time</button>
      </div>
    );
  }
}
