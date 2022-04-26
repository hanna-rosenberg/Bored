import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const Button = ({ buttonText, handleClick }) => {
  return (
    <button onClick={handleClick} className="btn">
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
};

Button.propTypes = {
  handleClick: PropTypes.func,
};

export default Button;
