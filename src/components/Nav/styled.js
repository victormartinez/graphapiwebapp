import styled from 'styled-components';

export const Nav = styled.nav`
  height: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #f2f2f2;
  margin-bottom: 1rem;

  a {
    text-decoration: none;
    padding: .375rem .75rem;
    color: #007bff;
  }

  & a:visited {
    color: #007bff;
  }

  & a:hover {
    color: #fff;
    background-color: #0069d9;
    border-color: #0062cc;
  }

  & a.active {
    color: #fff;
    font-weight: 900;
    background-color: #0069d9;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
`;

export const ListItem = styled.li`
  margin-right: 1rem;
`;
