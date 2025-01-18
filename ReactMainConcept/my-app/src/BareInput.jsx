import React from "react";
import PropTypes from "prop-types";

// class BareInput extends React.Component {
//   render() {
// const {type,...rest} = this.props;
//     return <input {...this.props}  />;
//   }
// }

function BareInput(props) {
  const { type: typeInput, ...rest } = props;
  return <input {...rest} type="typeInput" />;
}

BareInput.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  autoFocus: PropTypes.bool,
  value: PropTypes.string,
};

export default BareInput;
