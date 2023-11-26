import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Drawer } from '../Popover/popover.style'

export const Navbar = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 0;
`

export const NavMenu = styled.ul`
  display: flex;
  margin-bottom: 0;
`

export const NavLink = styled(Link)`
  color: #fff;
  margin-left: 1rem;
  margin-right: 1rem;
  &:hover {
    color: hsla(0, 0%, 100%, 0.7);
  }
`

export const User = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: #fff;
  cursor: pointer;
  margin-left: 1rem;
  margin-right: 1rem;
  ${Drawer} {
    width: 15rem;
    top: 135%;
  }
`
export const UserImage = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  object-fit: cover;
`
export const UserName = styled.div`
  padding-left: 5px;
  max-width: 15rem;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const UserLink = styled(Link)`
  color: rgba(0, 0, 0, 0.8);
  padding: 1rem 0 1rem 1.5rem;
  display: block;
  width: 100%;
  text-align: left;
  &:hover {
    background-color: #fafafa;
    color: #00bfa5;
  }
`
export const UserButton = styled.button`
  color: rgba(0, 0, 0, 0.8);
  padding: 1rem 0 1rem 1.5rem;
  display: block;
  background: transparent;
  border: 0;
  width: 100%;
  text-align: left;
  &:hover {
    background-color: #fafafa;
    color: #00bfa5;
  }
`
