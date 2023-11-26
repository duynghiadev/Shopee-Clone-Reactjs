import styled from 'styled-components'

export const FormControl = styled.div`
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.14);
  border-color: ${({ focus }) => (focus ? 'rgba(0,0,0,0.54)' : '')};
  box-shadow: inset 0 2px 0 rgb(0 0 0 / 2%);
  border-radius: 2px;
  display: flex;
  height: 4rem;
  input {
    outline: none;
    border: 0;
    flex-grow: 1;
    padding: 1.2rem;
  }
  button {
    padding: 0 1.5rem;
    flex-shrink: 0;
    background: transparent;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 2rem;
    }
  }
`
