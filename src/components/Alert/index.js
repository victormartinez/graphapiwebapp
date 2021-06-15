import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function Alert({ text, variant }) {
  return <S.Wrapper className={variant}>{text}</S.Wrapper>;
}

export default Alert;

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

Alert.defaultProps = {
  variant: null,
};
