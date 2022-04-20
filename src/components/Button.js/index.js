import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const Button = (props) => {
  return (
    <button
      className="btn"
      style={{
        backgroundColor: props.bg,
      }}
    >
      {props.buttonText}
    </button>
  );
};

// Set which props this component takes
// Button.propTypes = {
//   buttonText: PropTypes.string,
//   bg: PropTypes.string,
// };

// Set default props in case no props were passed to the component
// Button.defaultProps = {
//   buttonText: "I'm booored",
//   bg: "",
// };

export default Button;
