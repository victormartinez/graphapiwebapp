import styled from 'styled-components';

export const ActionRow = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
`

export const List = styled.ul``

export const ListItem = styled.li`
  background-color: #f2f2f2;
  padding: 0.75rem;
  margin-bottom: 0.5rem;

  &:hover {
    background-color: #dddddd;
  }

  &.empty {
    color: white;
    background-color: #f07470;
  }
`