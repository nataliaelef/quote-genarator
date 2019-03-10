import React from 'react';
import PropTypes from 'prop-types';

//we cannot render object, it needs to a string or a num
//all functions take as an argument props
const Quote = ({ quote }) => {
  //console.log(props);
  return (
    // we can also use <></> instead of <React.Fragment></React.Fragment>
    <React.Fragment>
      <p>{quote.text}</p>
      <p>{quote.actor}</p>
    </React.Fragment>
  );
};

//we do that do know what our props expect, so that if do not an erro we get a message
//are usufull to know where exactly the error is
Quote.propTypes = {
  quote: PropTypes.shape({
    text: PropTypes.string.isRequired,
    actor: PropTypes.string.isRequired
  })
};

export default Quote;
