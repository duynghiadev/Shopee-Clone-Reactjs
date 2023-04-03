import React from "react";
import PropTypes from "prop-types";

// class Layout extends React.Component {
//   render() {
//     return <div className="layout">{this.props.children}</div>;
//   }
// }

function Layout({ children }) {
  return <div className="layout">{children}</div>;
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export default Layout;
