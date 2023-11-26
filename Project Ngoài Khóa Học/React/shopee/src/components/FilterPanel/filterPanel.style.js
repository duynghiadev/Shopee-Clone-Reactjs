import { Link } from 'react-router-dom'
import { Button } from 'src/assets/styles/utils'
import styled from 'styled-components'
import BaseInputNumber from '../BaseInputNumber/BaseInputNumber'

export const CategoryTitleLink = styled(Link)`
  font-weight: 700;
  padding: 1.5rem 0;
  font-size: 1.6rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  svg {
    width: 1.25rem;
    margin-right: 1rem;
    stroke: currentColor;
  }
`
export const CategoryList = styled.ul``
export const CategoryItem = styled.li`
  padding: 8px 12px 10px;
  display: flex;
  align-items: center;
  a {
    color: rgba(0, 0, 0, 0.8);
    &.active {
      font-weight: 700;
      color: #ee4d2d;
    }
  }
`
export const CategoryTitle = styled.div`
  font-weight: 700;
  padding: 1.5rem 0;
  font-size: 1.6rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  svg {
    width: 1.25rem;
    margin-right: 1rem;
    stroke: currentColor;
  }
`
export const FilterGroup = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
`
export const FilterGroupHeader = styled.div`
  margin-bottom: 1rem;
`
export const PriceRange = styled.div`
  margin: 1rem auto 2rem;
`
export const PriceRangeGroup = styled.div`
  display: flex;
  align-items: center;
`
export const PriceRangeInput = styled(BaseInputNumber)`
  width: 8rem;
  padding: 1px 5px 2px;
  height: 3rem;
  border-radius: 1px;
  border: 1px solid rgba(0, 0, 0, 0.26);
`
export const PriceRangeLine = styled.div`
  flex: 1;
  height: 1px;
  background: #bdbdbd;
  margin: 0 1rem;
`
export const PriceErrorMessage = styled.div`
  padding: 1rem 0;
  text-align: center;
  color: #ff424f;
  font-size: 1.2rem;
`
export const PriceRangeButton = styled(Button)`
  margin: 2rem 0 0;
  text-transform: uppercase;
  width: 100%;
`
export const RemoveFilterButton = styled(PriceRangeButton)``
