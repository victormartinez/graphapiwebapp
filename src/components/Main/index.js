import React from 'react';

import PropTypes from 'prop-types';

import * as S from './styled';

function Main({ children }) {
  return <S.Wrapper>{children}</S.Wrapper>;
}

export default Main;

Main.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};
