import React, { Component } from "react";
import PropTypes from "prop-types";

export class BoillingVerdict extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.celsius >= 100
          ? "The water would boil"
          : "The water would not boil"}
      </div>
    );
  }
}

BoillingVerdict.propTypes = {
  celsius: PropTypes.number.isRequired,
};

export default BoillingVerdict;
