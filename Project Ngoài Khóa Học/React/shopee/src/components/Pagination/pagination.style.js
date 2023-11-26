import styled from 'styled-components'

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem auto 4rem;
`
const ButtonPaginate = styled.button`
  color: rgba(0, 0, 0, 0.4);
  min-width: 4rem;
  height: 3rem;
  margin: 0 1.5rem;
  border: none;
  background-color: transparent;
  font-size: 2rem;
  border-radius: 2px;
`
export const ButtonIcon = styled(ButtonPaginate)`
  svg {
    width: 1.4rem;
    height: 1.4rem;
    fill: currentColor;
  }
`
export const ButtonNoOutline = styled(ButtonPaginate)`
  &.active {
    color: #fff;
    background: #ee4d2d;
    transition: background 0.2s ease;
    &:hover {
      background: #f05d40;
    }
  }
`
