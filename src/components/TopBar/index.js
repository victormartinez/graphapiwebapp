import React from 'react';

import PropTypes from 'prop-types';

import Nav from '../../components/Nav';

function TopBar({ children }) {

  const urls = [
    {
      to: '/',
      name: 'home',
      label: 'Home',
    },
    {
      to: '/nodes',
      name: 'nodes',
      label: 'Nodes',
    },
    {
      to: '/friends',
      name: 'friends',
      label: 'Friends',
    },
    {
      to: '/friends-of-friends',
      name: 'friendsOfFriends',
      label: 'Friends of Friends',
    },
  ];
  
  return (
    <>
      <Nav urls={urls} />
      { children }
    </>
  );
}

export default TopBar;

TopBar.propTypes = {
  children: PropTypes.node,
};
