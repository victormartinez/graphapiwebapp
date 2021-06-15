import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function FormError({ error }) {
  return error ? <S.Error>{error}</S.Error> : null;
}

export default FormError;

FormError.propTypes = {
  error: PropTypes.string,
};

FormError.defaultProps = {
  error: null,
};
