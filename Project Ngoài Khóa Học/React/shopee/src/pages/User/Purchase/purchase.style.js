import { Link } from 'react-router-dom'
import { ButtonLink } from 'src/assets/styles/utils'
import styled from 'styled-components'

export const PurchaseTabs = styled.div`
  display: flex;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  border-radius: 2px;
  background: #fff;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  margin-bottom: 1.2rem;
`
export const PurchaseTabItem = styled(Link)`
  display: block;
  font-size: 1.4rem;
  padding: 1.7rem 0;
  cursor: pointer;
  user-select: none;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  &.active {
    color: #ee4d2d;
    border-bottom: 2px solid #ee4d2d;
  }
`
export const PurchaseList = styled.div``
export const OrderCard = styled.div`
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  border-radius: 2px;
  background-color: #fff;
  padding: 2rem;
  margin-bottom: 1.5rem;
`
export const OrderCardContent = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`
export const OrderCardDetail = styled.div`
  flex-grow: 1;
  display: flex;
  > img {
    width: 8rem;
    height: 8rem;
  }
`
export const OrderCardPrice = styled.div`
  width: 12rem;
  padding-left: 5px;
  text-align: right;
`
export const OrderContent = styled.div`
  margin-left: 1rem;
  flex-grow: 1;
`
export const OrderName = styled.div`
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
`
export const OrderQuantity = styled.div``
export const OrderCardButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const PurchaseButton = styled(ButtonLink)`
  height: 4rem;
`
export const TotalPrice = styled.div`
  display: flex;
  align-items: flex-end;
`
export const TotalPriceLabel = styled.div`
  margin-right: 1rem;
`
export const TotalPricePrice = styled.div`
  color: #ee4d2d;
  font-size: 3rem;
`
