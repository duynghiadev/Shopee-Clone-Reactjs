import React from "react";

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
    };
    this.date = "3/4/2023";
    this.getTime = this.getTime.bind(this);
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
    return (
      <div>
        <h1>Hello, world!, {this.props.name}</h1>
        <h2>It is {this.state.time.created}</h2>
        <h2>It is {this.state.seconds.created}</h2>
        <h2>It is {this.date}</h2>
        <button onClick={this.getTime}>Get Time</button>
      </div>
    );
  }
}
