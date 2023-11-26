import { Request, Response } from 'express'
import { STATUS_PURCHASE } from '../constants/purchase'
import { STATUS } from '../constants/status'
import { ProductModel } from '../database/models/product.model'
import { PurchaseModel } from '../database/models/purchase.model'
import { ErrorHandler, responseSuccess } from '../utils/response'
import { handleImageProduct } from './product.controller'
import { cloneDeep } from 'lodash'

export const addToCart = async (req: Request, res: Response) => {
  const { product_id, buy_count } = req.body
  const product: any = await ProductModel.findById(product_id).lean()
  if (product) {
    if (buy_count > product.quantity) {
      throw new ErrorHandler(
        STATUS.NOT_ACCEPTABLE,
        'Số lượng vượt quá số lượng sản phẩm'
      )
    }
    const purchaseInDb: any = await PurchaseModel.findOne({
      user: req.jwtDecoded.id,
      status: STATUS_PURCHASE.IN_CART,
      product: {
        _id: product_id,
      },
    }).populate({
      path: 'product',
      populate: {
        path: 'category',
      },
    })
    let data
    if (purchaseInDb) {
      data = await PurchaseModel.findOneAndUpdate(
        {
          user: req.jwtDecoded.id,
          status: STATUS_PURCHASE.IN_CART,
          product: {
            _id: product_id,
          },
        },
        {
          buy_count: purchaseInDb.buy_count + buy_count,
        },
        {
          new: true,
        }
      )
        .populate({
          path: 'product',
          populate: {
            path: 'category',
          },
        })
        .lean()
    } else {
      const purchase = {
        user: req.jwtDecoded.id,
        product: product._id,
        buy_count: buy_count,
        price: product.price,
        price_before_discount: product.price_before_discount,
        status: STATUS_PURCHASE.IN_CART,
      }
      const addedPurchase = await new PurchaseModel(purchase).save()
      data = await PurchaseModel.findById(addedPurchase._id).populate({
        path: 'product',
        populate: {
          path: 'category',
        },
      })
    }
    const response = {
      message: 'Thêm sản phẩm vào giỏ hàng thành công',
      data,
    }
    return responseSuccess(res, response)
  } else {
    throw new ErrorHandler(STATUS.NOT_FOUND, 'Không tìm thấy sản phẩm')
  }
}

export const updatePurchase = async (req: Request, res: Response) => {
  const { product_id, buy_count } = req.body
  const purchaseInDb: any = await PurchaseModel.findOne({
    user: req.jwtDecoded.id,
    status: STATUS_PURCHASE.IN_CART,
    product: {
      _id: product_id,
    },
  })
    .populate({
      path: 'product',
      populate: {
        path: 'category',
      },
    })
    .lean()
  if (purchaseInDb) {
    if (buy_count > purchaseInDb.product.quantity) {
      throw new ErrorHandler(
        STATUS.NOT_ACCEPTABLE,
        'Số lượng vượt quá số lượng sản phẩm'
      )
    }
    const data = await PurchaseModel.findOneAndUpdate(
      {
        user: req.jwtDecoded.id,
        status: STATUS_PURCHASE.IN_CART,
        product: {
          _id: product_id,
        },
      },
      {
        buy_count,
      },
      {
        new: true,
      }
    )
      .populate({
        path: 'product',
        populate: {
          path: 'category',
        },
      })
      .lean()
    const response = {
      message: 'Cập nhật đơn thành công',
      data,
    }
    return responseSuccess(res, response)
  } else {
    throw new ErrorHandler(STATUS.NOT_FOUND, 'Không tìm thấy đơn')
  }
}

export const buyProducts = async (req: Request, res: Response) => {
  const purchases = []
  for (const item of req.body) {
    const product: any = await ProductModel.findById(item.product_id).lean()
    if (product) {
      if (item.buy_count > product.quantity) {
        throw new ErrorHandler(
          STATUS.NOT_ACCEPTABLE,
          'Số lượng mua vượt quá số lượng sản phẩm'
        )
      } else {
        let data = await PurchaseModel.findOneAndUpdate(
          {
            user: req.jwtDecoded.id,
            status: STATUS_PURCHASE.IN_CART,
            product: {
              _id: item.product_id,
            },
          },
          {
            buy_count: item.buy_count,
            status: STATUS_PURCHASE.WAIT_FOR_CONFIRMATION,
          },
          {
            new: true,
          }
        )
          .populate({
            path: 'product',
            populate: {
              path: 'category',
            },
          })
          .lean()
        if (!data) {
          const purchase = {
            user: req.jwtDecoded.id,
            product: item.product_id,
            buy_count: item.buy_count,
            price: product.price,
            price_before_discount: product.price_before_discount,
            status: STATUS_PURCHASE.WAIT_FOR_CONFIRMATION,
          }
          const addedPurchase = await new PurchaseModel(purchase).save()
          data = await PurchaseModel.findById(addedPurchase._id).populate({
            path: 'product',
            populate: {
              path: 'category',
            },
          })
        }
        purchases.push(data)
      }
    } else {
      throw new ErrorHandler(STATUS.NOT_FOUND, 'Không tìm thấy sản phẩm')
    }
  }
  const response = {
    message: 'Mua thành công',
    data: purchases,
  }
  return responseSuccess(res, response)
}

export const getPurchases = async (req: Request, res: Response) => {
  const { status = STATUS_PURCHASE.ALL } = req.query
  const user_id = req.jwtDecoded.id
  let condition: any = {
    user: user_id,
    status: {
      $ne: STATUS_PURCHASE.IN_CART,
    },
  }
  if (Number(status) !== STATUS_PURCHASE.ALL) {
    condition.status = status
  }

  let purchases: any = await PurchaseModel.find(condition)
    .populate({
      path: 'product',
      populate: {
        path: 'category',
      },
    })
    .sort({
      createdAt: -1,
    })
    .lean()
  purchases = purchases.map((purchase) => {
    purchase.product = handleImageProduct(cloneDeep(purchase.product))
    return purchase
  })
  const response = {
    message: 'Lấy đơn mua thành công',
    data: purchases,
  }
  return responseSuccess(res, response)
}

export const deletePurchases = async (req: Request, res: Response) => {
  const purchase_ids = req.body
  const user_id = req.jwtDecoded.id
  const deletedData = await PurchaseModel.deleteMany({
    user: user_id,
    status: STATUS_PURCHASE.IN_CART,
    _id: { $in: purchase_ids },
  })
  return responseSuccess(res, {
    message: `Xoá ${deletedData.deletedCount} đơn thành công`,
    data: { deleted_count: deletedData.deletedCount },
  })
}
