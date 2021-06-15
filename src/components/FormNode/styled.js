import styled from 'styled-components';

export const Form = styled.form``;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  &.actionRow {
    flex-direction: row;
    justify-content: flex-start;
  }

  &.actionRow button {
    border-radius: 10rem;
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Span = styled.span`
  margin-top: -1.5rem;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  color: #767676;
`
