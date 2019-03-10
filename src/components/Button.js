import React from 'react';
import PropTypes from 'prop-types';

//getNewQuote come here from app.js on props
const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

//propTypes with lower p is a property, available when we create-react-app
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default Button;
