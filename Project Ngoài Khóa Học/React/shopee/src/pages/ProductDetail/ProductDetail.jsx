import { unwrapResult } from '@reduxjs/toolkit'
import DOMPurify from 'dompurify'
import React, { useEffect, useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import ProductQuantityController from 'src/components/ProductQuantityController/ProductQuantityController'
import ProductRating from 'src/components/ProductRating/ProductRating'
import {
  formatK,
  formatMoney,
  getIdFromNameId,
  rateSale
} from 'src/utils/helper'
import { getCartPurchases } from '../Cart/cart.slice'
import { addToCart, getProductDetail } from './productDetail.slice'
import * as S from './productDetail.style'

export default function ProductDetail() {
  const [product, setProduct] = useState()
  const [currentImage, setCurrentImage] = useState({})
  const [currentIndexImages, setCurrentIndexImages] = useState([0, 5])
  const [quantity, setQuantity] = useState(1)

  const currentImages = useMemo(() => {
    if (product) {
      return product.images.slice(...currentIndexImages)
    }
    return []
  }, [product, currentIndexImages])

  const dispatch = useDispatch()
  const { idProduct } = useParams()

  useEffect(() => {
    const realId = getIdFromNameId(idProduct)
    dispatch(getProductDetail(realId))
      .then(unwrapResult)
      .then(res => {
        res.data.images = res.data.images.map((image, index) => {
          return {
            url: image,
            id: index
          }
        })
        setCurrentImage(res.data.images[0])
        setProduct(res.data)
      })
  }, [idProduct, dispatch])

  const chooseCurrent = image => setCurrentImage(image)

  const choosePrev = () => {
    if (currentIndexImages[0] > 0) {
      setCurrentIndexImages(currentIndexImages => [
        currentIndexImages[0] - 1,
        currentIndexImages[1] - 1
      ])
    }
  }

  const chooseNext = () => {
    if (currentIndexImages[1] < product.images.length) {
      setCurrentIndexImages(currentIndexImages => [
        currentIndexImages[0] + 1,
        currentIndexImages[1] + 1
      ])
    }
  }

  const handleChangeQuantity = value => setQuantity(value)

  const handleAddToCart = async () => {
    const body = {
      product_id: product._id,
      buy_count: quantity
    }
    const res = await dispatch(addToCart(body)).then(unwrapResult)
    await dispatch(getCartPurchases()).then(unwrapResult)
    toast.success(res.message, {
      position: 'top-center',
      autoClose: 4000
    })
  }

  return (
    <div>
      {product && (
        <div className="container">
          <Helmet>
            <title>{product.name}</title>
          </Helmet>
          <S.ProductBriefing>
            <S.ProductImages>
              <S.ProductImageActive>
                <img src={currentImage.url} alt="" />
              </S.ProductImageActive>
              <S.ProductImageSlider>
                <S.ProductIconButtonPrev onClick={choosePrev}>
                  <svg
                    enableBackground="new 0 0 13 20"
                    viewBox="0 0 13 20"
                    x={0}
                    y={0}
                    className="shopee-svg-icon icon-arrow-left-bold"
                  >
                    <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9" />
                  </svg>
                </S.ProductIconButtonPrev>
                {currentImages.map(image => (
                  <S.ProductImage
                    key={image.id}
                    onMouseEnter={() => chooseCurrent(image)}
                    active={currentImage.id === image.id}
                  >
                    <img src={image.url} alt="" />
                  </S.ProductImage>
                ))}
                <S.ProductIconButtonNext onClick={chooseNext}>
                  <svg
                    enableBackground="new 0 0 13 21"
                    viewBox="0 0 13 21"
                    x={0}
                    y={0}
                    className="shopee-svg-icon icon-arrow-right-bold"
                  >
                    <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11" />
                  </svg>
                </S.ProductIconButtonNext>
              </S.ProductImageSlider>
            </S.ProductImages>
            <S.ProductMeta>
              <S.ProductTitle>{product.name}</S.ProductTitle>
              <S.ProductMeta1>
                <S.ProductRating>
                  <span>{product.rating}</span>
                  <ProductRating rating={product.rating} />
                </S.ProductRating>
                <S.ProductSold>
                  <span>{formatK(product.sold)}</span>
                  <span>Đã bán</span>
                </S.ProductSold>
              </S.ProductMeta1>
              <S.ProductPrice>
                <S.ProductPriceOriginal>
                  đ{formatMoney(product.price_before_discount)}
                </S.ProductPriceOriginal>
                <S.ProductPriceSale>
                  đ{formatMoney(product.price)}
                </S.ProductPriceSale>
                <S.ProductPriceSalePercent>
                  {rateSale(product.price_before_discount, product.price)} giảm
                </S.ProductPriceSalePercent>
              </S.ProductPrice>
              <S.ProductBuyQuantity>
                <S.ProductBuyQuantityTitle>Số lượng</S.ProductBuyQuantityTitle>
                <S.ProductBuyQuantityController>
                  <ProductQuantityController
                    value={quantity}
                    max={product.quantity}
                    onChange={handleChangeQuantity}
                  />
                </S.ProductBuyQuantityController>
                <S.ProductBuyQuantityQuantity>
                  {product.quantity} sản phẩm có sẵn
                </S.ProductBuyQuantityQuantity>
              </S.ProductBuyQuantity>
              <S.ProductButtons onClick={handleAddToCart}>
                <svg
                  enableBackground="new 0 0 15 15"
                  viewBox="0 0 15 15"
                  x={0}
                  y={0}
                  className="shopee-svg-icon _2FCuXA icon-add-to-cart"
                >
                  <g>
                    <g>
                      <polyline
                        fill="none"
                        points=".5 .5 2.7 .5 5.2 11 12.4 11 14.5 3.5 3.7 3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                      />
                      <circle cx={6} cy="13.5" r={1} stroke="none" />
                      <circle cx="11.5" cy="13.5" r={1} stroke="none" />
                    </g>
                    <line
                      fill="none"
                      strokeLinecap="round"
                      strokeMiterlimit={10}
                      x1="7.5"
                      x2="10.5"
                      y1={7}
                      y2={7}
                    />
                    <line
                      fill="none"
                      strokeLinecap="round"
                      strokeMiterlimit={10}
                      x1={9}
                      x2={9}
                      y1="8.5"
                      y2="5.5"
                    />
                  </g>
                </svg>
                Thêm vào giỏ hàng
              </S.ProductButtons>
            </S.ProductMeta>
          </S.ProductBriefing>
          <S.ProductContent>
            <S.ProductContentHeading>MÔ TẢ SẢN PHẨM</S.ProductContentHeading>
            <S.ProductContentDetail
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(product.description)
              }}
            />
          </S.ProductContent>
        </div>
      )}
    </div>
  )
}
