import { Link } from 'react-router-dom'
import { Button } from 'src/assets/styles/utils'
import styled from 'styled-components'

export const ProductHeader = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  overflow: hidden;
  border-radius: 3px;
  height: 5.5rem;
  font-size: 1.4rem;
  background: #fff;
  text-transform: capitalize;
  margin-bottom: 12px;
  color: #888;
  padding: 0 20px;
`
export const ProductHeaderCheckbox = styled.div`
  display: flex;
  align-items: center;
  padding: 0 12px 0 20px;
  min-width: 58px;
`
export const ProductHeaderName = styled.div`
  width: 45%;
  color: rgba(0, 0, 0, 0.8);
`
export const ProductHeaderUnitPrice = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ProductHeaderQuantity = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ProductHeaderTotalPrice = styled.div`
  width: 11%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ProductHeaderAction = styled.div`
  width: 12%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ProductSection = styled.div`
  padding: 20px;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  border-radius: 3px;
  background: #fff;
  margin-bottom: 2.5rem;
`
export const CartItem = styled.div`
  margin-bottom: 2.2rem;
  padding: 2rem 0;
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 2px;
`
export const CartItemCheckbox = styled(ProductHeaderCheckbox)``
export const CartItemOverview = styled(ProductHeaderName)`
  display: flex;
`
export const CartItemOverviewImage = styled(Link)`
  width: 8rem;
  height: 8rem;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`
export const CartItemOverviewNameWrapper = styled.div`
  overflow: hidden;
  flex-grow: 1;
  padding: 0.5rem 2rem 0 1rem;
`
export const CartItemOverviewName = styled(Link)`
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 0.3125rem;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`
export const CartItemUnitPrice = styled(ProductHeaderUnitPrice)`
  span:first-child {
    color: rgba(0, 0, 0, 0.54);
    text-decoration: line-through;
    margin-right: 1rem;
  }
`
export const CartItemQuantity = styled(ProductHeaderQuantity)``
export const CartItemTotalPrice = styled(ProductHeaderTotalPrice)`
  span {
    text-align: right;
    color: #ee4d2d;
  }
`
export const CartItemAction = styled(ProductHeaderAction)``
export const CartItemActionButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  transition: color 0.1s ease;
  :hover {
    color: #ee4d2d;
  }
`
export const CartFooter = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 3px;
  font-size: 1.6rem;
  position: sticky;
  bottom: 0;
  z-index: 2;
  :before {
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.06));
    content: '';
    position: absolute;
    top: -1rem;
    left: 0;
    height: 1rem;
    width: 100%;
  }
`
export const CartFooterCheckbox = styled(ProductHeaderCheckbox)``
export const CartFooterButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  margin: 0 1rem;
`
export const CartFooterSpaceBetween = styled.div`
  flex-grow: 1;
`

export const CartFooterPrice = styled.div`
  margin-left: 1rem;
`
export const CartFooterPriceTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  div {
    :first-child {
      color: #222;
    }
    :last-child {
      font-size: 2.4rem;
      margin-left: 5px;
      color: #ee4d2d;
    }
  }
`
export const CartFooterPriceBot = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  div {
    :first-child {
      font-size: 1.4rem;
    }
    :last-child {
      color: #ee4d2d;
      padding-left: 2.4rem;
    }
  }
`
export const CartFooterCheckout = styled(Button)`
  text-transform: capitalize;
  height: 4rem;
  font-size: 1.4rem;
  width: 21rem;
  font-weight: 300;
  margin: 0 2rem;
`
