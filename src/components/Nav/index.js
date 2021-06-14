import React from 'react';

import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as S from './styled';

function Nav({ urls }) {
  return (
    <S.Nav>
      <S.List>
        {urls.map(obj => (
          <S.ListItem key={obj.name}>
            <NavLink exact activeClassName="active" to={obj.to} name={obj.name}>
              {obj.label}
            </NavLink>
          </S.ListItem>
        ))}
      </S.List>
    </S.Nav>
  );
}

export default Nav;

Nav.propTypes = {
  urls: PropTypes.arrayOf(PropTypes.object).isRequired,
};
