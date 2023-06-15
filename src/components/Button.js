import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, text, buttonClass }) => (
  <button type="button" onClick={onClick} className={buttonClass}>
    {text}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  buttonClass: PropTypes.string.isRequired,
};

export default Button;
