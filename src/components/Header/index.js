import React from "react";
import PropTypes from "prop-types";
import "./header.css";

const Header = ({ headerText }) => {
  return <h1>{headerText}</h1>;
};

Header.propTypes = {
  headerText: PropTypes.string,
};

export default Header;
