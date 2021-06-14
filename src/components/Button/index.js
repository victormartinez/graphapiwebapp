import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function Button({ variant, text, ...other }) {
  return (
    <S.Button className={variant} {...other}>
      {text}
    </S.Button>
  );
}

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

Button.defaultProps = {
  variant: '',
};
