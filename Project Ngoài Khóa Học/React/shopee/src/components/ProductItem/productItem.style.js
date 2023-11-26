import styled from 'styled-components'

export const Product = styled.div`
  flex: 0 0 20%;
  max-width: 20%;
  padding: 0 5px;
  margin: 5px 0;
`
export const ProductItem = styled.div`
  color: rgba(0, 0, 0, 0.8);
  background: #fff;
  box-shadow: 0 0.1rem 0.25rem 0 rgb(0 0 0 / 10%);
  border-radius: 0.25rem;
  transition: all 0.1s ease;
  &:hover {
    box-shadow: 0 0.1rem 2rem 0 rgb(0 0 0 / 5%);
    transform: translateY(-0.0625rem);
  }
`
export const ProductItemImage = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    object-fit: contain;
    vertical-align: bottom;
  }
`
export const ProductItemInfo = styled.div`
  padding: 0.5rem;
`
export const ProductItemTitle = styled.div`
  display: inline-block;
  display: -webkit-box;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: 1.2rem;
  line-height: 1.4rem;
  margin-bottom: 0.5rem;
`
export const ProductItemPrice = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 0.5rem;
  margin-bottom: 1rem;
`
export const ProductItemPriceOriginal = styled.div`
  flex-shrink: 1;
  max-width: 50%;
  color: rgba(0, 0, 0, 0.54);
  text-decoration: line-through;
  margin-right: 5px;
  font-size: 1.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const ProductItemPriceSale = styled.div`
  flex-grow: 1;
  color: #ee4d2d;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  span {
    &:first-child {
      font-size: 1.2rem;
      color: #ee4d2d;
    }
    &:last-child {
      font-size: 1.6rem;
      color: #ee4d2d;
    }
  }
`
export const ProductItemMeta = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const ProductItemSold = styled.div`
  color: rgba(0, 0, 0, 0.87);
  margin-left: 0.5rem;
  font-size: 1.2rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  span:first-child {
    margin-right: 3px;
  }
`
