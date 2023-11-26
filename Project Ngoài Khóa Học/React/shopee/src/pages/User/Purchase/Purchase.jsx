import { unwrapResult } from '@reduxjs/toolkit'
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { path } from 'src/constants/path'
import { purchaseStatus } from 'src/constants/status'
import useQuery from 'src/hooks/useQuery'
import { getPurchases } from '../user.slice'
import * as S from './purchase.style'
import qs from 'query-string'
import { formatMoney, generateNameId } from 'src/utils/helper'
import { Helmet } from 'react-helmet-async'

export default function Purchase() {
  const [purchases, setPurchases] = useState([])
  const dispatch = useDispatch()
  const query = useQuery()
  const status = useMemo(() => query.status || purchaseStatus.all, [query])

  useEffect(() => {
    dispatch(getPurchases(status))
      .then(unwrapResult)
      .then(res => {
        setPurchases(res.data)
      })
  }, [status, dispatch])

  const handleActive = value => Number(value) === Number(status)

  return (
    <div>
      <Helmet>
        <title>Đơn mua</title>
      </Helmet>
      <S.PurchaseTabs>
        <S.PurchaseTabItem
          to={path.user + path.purchase}
          className={handleActive(purchaseStatus.all) ? 'active' : ''}
        >
          Tất cả
        </S.PurchaseTabItem>
        <S.PurchaseTabItem
          to={{
            pathname: path.user + path.purchase,
            search: `?${qs.stringify({
              status: purchaseStatus.waitForConfirmation
            })}`
          }}
          className={
            handleActive(purchaseStatus.waitForConfirmation) ? 'active' : ''
          }
        >
          Chờ xác nhận
        </S.PurchaseTabItem>
        <S.PurchaseTabItem
          to={{
            pathname: path.user + path.purchase,
            search: `?${qs.stringify({
              status: purchaseStatus.waitForGetting
            })}`
          }}
          className={
            handleActive(purchaseStatus.waitForGetting) ? 'active' : ''
          }
        >
          Chờ lấy hàng
        </S.PurchaseTabItem>
        <S.PurchaseTabItem
          to={{
            pathname: path.user + path.purchase,
            search: `?${qs.stringify({
              status: purchaseStatus.inProgress
            })}`
          }}
          className={handleActive(purchaseStatus.inProgress) ? 'active' : ''}
        >
          Đang giao
        </S.PurchaseTabItem>
        <S.PurchaseTabItem
          to={{
            pathname: path.user + path.purchase,
            search: `?${qs.stringify({
              status: purchaseStatus.delivered
            })}`
          }}
          className={handleActive(purchaseStatus.delivered) ? 'active' : ''}
        >
          Đã giao
        </S.PurchaseTabItem>
        <S.PurchaseTabItem
          to={{
            pathname: path.user + path.purchase,
            search: `?${qs.stringify({
              status: purchaseStatus.cancelled
            })}`
          }}
          className={handleActive(purchaseStatus.cancelled) ? 'active' : ''}
        >
          Đã hủy
        </S.PurchaseTabItem>
      </S.PurchaseTabs>
      <S.PurchaseList>
        {purchases.map(purchase => (
          <S.OrderCard key={purchase._id}>
            <S.OrderCardContent>
              <S.OrderCardDetail>
                <img src={purchase.product.image} alt="" />
                <S.OrderContent>
                  <S.OrderName>{purchase.product.name}</S.OrderName>
                  <S.OrderQuantity>
                    x {purchase.product.buy_count}
                  </S.OrderQuantity>
                </S.OrderContent>
              </S.OrderCardDetail>
              <S.OrderCardPrice>
                đ{formatMoney(purchase.product.price)}
              </S.OrderCardPrice>
            </S.OrderCardContent>
            <S.OrderCardButtonsContainer>
              <S.PurchaseButton
                to={path.product + `/${generateNameId(purchase.product)}`}
                light={1}
              >
                Xem sản phẩm
              </S.PurchaseButton>
              <S.TotalPrice>
                <S.TotalPriceLabel>Tổng giá tiền</S.TotalPriceLabel>
                <S.TotalPricePrice>
                  đ{formatMoney(purchase.product.price * purchase.buy_count)}
                </S.TotalPricePrice>
              </S.TotalPrice>
            </S.OrderCardButtonsContainer>
          </S.OrderCard>
        ))}
      </S.PurchaseList>
    </div>
  )
}
