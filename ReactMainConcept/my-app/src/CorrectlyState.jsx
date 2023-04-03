import React, { Component } from "react";

const fetchComment = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(["A", "B", "C"]), 1000);
  });

export class CorrectlyState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      comments: [],
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));

    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));

    // Mình truyền nguyên 1 cái object với các thuộc tính giống như cái state ban đầu
    // React class component có tính năng merge state
    fetchComment().then((res) => {
      this.setState({
        comments: res,
      });
    });
  }

  render() {
    console.log(this.state);
    console.log("render");
    return <div>CorrectlyState. Count: {this.state.count}</div>;
  }
}

export default CorrectlyState;
