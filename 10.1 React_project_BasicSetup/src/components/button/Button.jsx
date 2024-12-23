import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

function Button({ title, ...rest }) {
  // Validamos que type sea uno de los valores permitidos
  return (
    <button
      type="button"
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...rest}
    >
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['submit', 'button', 'reset']), // Especificamos los tipos permitidos
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
