import styled from 'styled-components';

export const Button = styled.button`
  padding: .375rem .75rem;
  cursor: pointer;
  font-weight: 900;
  margin: 0.5rem 0 0 0;
  border: none;

  &.success {
    background-color: #21df86;
  }
  &.success:hover {
    opacity: 0.7;
  }
`;
