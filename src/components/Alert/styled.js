import styled from 'styled-components';

export const Wrapper = styled.div`
  font-size: 0.9rem;
  padding: 0.75rem 1.25rem;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  color: #383d41;
  background-color: #e2e3e5;
  border-color: #d6d8db;

  &.error {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  }
`;
