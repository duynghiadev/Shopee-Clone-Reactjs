import React from 'react'
import { Link } from 'react-router-dom'
import ProductRating from '../ProductRating/ProductRating'
import * as S from './productItem.style'
import PropTypes from 'prop-types'
import { path } from 'src/constants/path'
import { formatK, formatMoney, generateNameId } from 'src/utils/helper'

export default function ProductItem({ product }) {
  return (
    <S.Product>
      <Link to={path.product + `/${generateNameId(product)}`}>
        <S.ProductItem>
          <S.ProductItemImage>
            <img src={product.image} alt={product.name} />
          </S.ProductItemImage>
          <S.ProductItemInfo>
            <S.ProductItemTitle>{product.name}</S.ProductItemTitle>
            <S.ProductItemPrice>
              <S.ProductItemPriceOriginal>
                đ{formatMoney(product.price_before_discount)}
              </S.ProductItemPriceOriginal>
              <S.ProductItemPriceSale>
                đ{formatMoney(product.price)}
              </S.ProductItemPriceSale>
            </S.ProductItemPrice>
            <S.ProductItemMeta>
              <ProductRating rating={product.rating} />
              <S.ProductItemSold>
                <span>{formatK(product.sold)}</span>
                <span>Đã bán</span>
              </S.ProductItemSold>
            </S.ProductItemMeta>
          </S.ProductItemInfo>
        </S.ProductItem>
      </Link>
    </S.Product>
  )
}

ProductItem.propTypes = {
  product: PropTypes.object
}
