import React from 'react';
import PropTypes from 'prop-types';

import Main from '../../components/Main';
import TopBar from '../../components/TopBar';

import * as S from './styled';

function BasePage({ children }) {
  return (
    <Main>
      <TopBar />
      <S.Wrapper>{children}</S.Wrapper>
    </Main>
  );
}

export default BasePage;

BasePage.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};
