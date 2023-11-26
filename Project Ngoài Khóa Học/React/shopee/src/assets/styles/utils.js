import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  background: #ee4d2d;
  border-radius: 2px;
  border: 0;
  color: #fff;
  padding: 1px 6px;
  transition: 0.2s background ease;
  &:hover {
    background: #f05d40;
  }
  ${({ light }) => {
    if (light) {
      return `
      background: #fff;
      color: #555;
      border: 1px solid rgba(0,0,0,.09);
      box-shadow: 0 1px 1px 0 rgb(0 0 0 / 3%);
      &:hover {
        background: rgba(0,0,0,.02);
      }
      `
    }
  }}
`
export const ButtonLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  background: #ee4d2d;
  border-radius: 2px;
  border: 0;
  color: #fff;
  padding: 1px 6px;
  transition: 0.2s background ease;
  &:hover {
    background: #f05d40;
  }
  ${({ light }) => {
    if (light) {
      return `
      background: #fff;
      color: #555;
      border: 1px solid rgba(0,0,0,.09);
      box-shadow: 0 1px 1px 0 rgb(0 0 0 / 3%);
      &:hover {
        background: rgba(0,0,0,.02);
      }
      `
    }
  }}
`
