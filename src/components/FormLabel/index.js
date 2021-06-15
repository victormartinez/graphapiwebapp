import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function FormLabel({ label, htmlFor }) {
  return (
    <S.Wrapper>
      <S.Label htmlFor={htmlFor}>{label}</S.Label>
    </S.Wrapper>
  );
}

export default FormLabel;

FormLabel.propTypes = {
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
};
