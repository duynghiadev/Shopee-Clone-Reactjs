import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      address: "",
      food: "2",
      marriage: false,
    };
  }

  handleChange = (event) => {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    console.log("Target type: ", target.type);

    const { name } = target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>

          <input
            type="checkbox"
            name="marriage"
            checked={this.marriage}
            onChange={this.handleChange}
          />

          <textarea
            name="address"
            value={this.state.address}
            onChange={this.handleChange}
          />

          <select
            name="food"
            value={this.state.food}
            onChange={this.handleChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>

          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default Form;
