import styled from "styled-components"

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`

export const Label = styled.label`
  font-size: 1em;
  margin-bottom: 0.4em;
`

export const Input = styled.input`
  border-radius: 0.5em;
  border: 1px solid #1c1433;
  height: 2.5em;
  font-size: 1em;
  background-color: white;
  padding-left: 0.5em;

  &::placeholder {
    color: #bcbcbc;
  }
`

export const Error = styled.span`
  color: #fe1765;
  margin-top: 0.5em;
  font-size: 0.8em;
`
