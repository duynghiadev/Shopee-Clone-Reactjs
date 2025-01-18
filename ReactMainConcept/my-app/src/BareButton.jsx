import React from "react";
import PropTypes from "prop-types";

class BareButton extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(event, value) {
    console.log(event);
    console.log(value);
  }

  // handleClick(value) {
  //   console.log(value);
  // }

  // Currying rút gọn (1)
  // handleClick = (value) => () => {
  //   console.log(value);
  // };

  // Currying dài dòng (2)
  // handleClick = (value) => {
  //   console.log("value currying run first =>", value);
  //   return () => {
  //     console.log(value);
  //   };
  // };

  render() {
    return (
      <div>
        <button onClick={(event) => this.handleClick(event, "Add")}>Add</button>
        <button onClick={this.handleClick}>Edit</button>
        <button onClick={this.handleClick}>Delete</button>
      </div>
    );
  }
}

// function BareButton(props) {
//   return (
//     <div>
//       <button>Add</button>
//       <button>Edit</button>
//       <button>Delete</button>
//     </div>
//   );
// }

BareButton.propTypes = {};

export default BareButton;
