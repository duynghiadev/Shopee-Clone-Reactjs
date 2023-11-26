import { Request, Response } from 'express'
import { responseSuccess, ErrorHandler } from '../utils/response'
import { ProductModel } from '../database/models/product.model'
import { STATUS } from '../constants/status'
import mongoose from 'mongoose'
import { isAdmin } from '../utils/validate'
import { uploadFile, uploadManyFile } from '../utils/upload'
import { HOST } from '../utils/helper'
import { FOLDERS, FOLDER_UPLOAD, ROUTE_IMAGE } from '../constants/config'
import fs from 'fs'
import { omitBy } from 'lodash'
import { ORDER, SORT_BY } from '../constants/product'

export const handleImageProduct = (product) => {
  if (product.image !== undefined && product.image !== '') {
    product.image = HOST + `/${ROUTE_IMAGE}/` + product.image
  }
  if (product.images !== undefined && product.images.length !== 0) {
    product.images = product.images.map((image) => {
      return image !== '' ? HOST + `/${ROUTE_IMAGE}/` + image : ''
    })
  }
  return product
}

const removeImageProduct = (image) => {
  if (image !== undefined && image !== '') {
    fs.unlink(`${FOLDER_UPLOAD}/${FOLDERS.PRODUCT}/${image}`, (err) => {
      if (err) console.error(err)
    })
  }
}

const removeManyImageProduct = (images: string[]) => {
  if (images !== undefined && images.length > 0) {
    images.forEach((image) => {
      removeImageProduct(image)
    })
  }
}

const addProduct = async (req: Request, res: Response) => {
  const form: Product = req.body
  const {
    name,
    description,
    category,
    image,
    images,
    price,
    rating,
    price_before_discount,
    quantity,
    sold,
    view,
  } = form
  const product = {
    name,
    description,
    category,
    image,
    images,
    price,
    rating,
    price_before_discount,
    quantity,
    sold,
    view,
  }
  const productAdd = await new ProductModel(product).save()
  const response = {
    message: 'Tạo sản phẩm thành công',
    data: productAdd.toObject({
      transform: (doc, ret, option) => {
        delete ret.__v
        return handleImageProduct(ret)
      },
    }),
  }
  return responseSuccess(res, response)
}

const getProducts = async (req: Request, res: Response) => {
  let {
    page = 1,
    limit = 30,
    category,
    exclude,
    sort_by,
    order,
    rating_filter,
    price_max,
    price_min,
    name,
  } = req.query as {
    [key: string]: string | number
  }

  page = Number(page)
  limit = Number(limit)
  let condition: any = {}
  if (category) {
    condition.category = category
  }
  if (exclude) {
    condition._id = { $ne: exclude }
  }
  if (rating_filter) {
    condition.rating = { $gte: rating_filter }
  }
  if (price_max) {
    condition.price = {
      $lte: price_max,
    }
  }
  if (price_min) {
    condition.price = condition.price
      ? { ...condition.price, $gte: price_min }
      : { $gte: price_min }
  }
  if (!ORDER.includes(order as string)) {
    order = ORDER[0]
  }
  if (!SORT_BY.includes(sort_by as string)) {
    sort_by = SORT_BY[0]
  }
  if (name) {
    condition.name = {
      $regex: name,
      $options: 'i',
    }
  }
  let [products, totalProducts]: [products: any, totalProducts: any] =
    await Promise.all([
      ProductModel.find(condition)
        .populate({
          path: 'category',
        })
        .sort({ [sort_by]: order === 'desc' ? -1 : 1 })
        .skip(page * limit - limit)
        .limit(limit)
        .select({ __v: 0, description: 0 })
        .lean(),
      ProductModel.find(condition).countDocuments().lean(),
    ])
  products = products.map((product) => handleImageProduct(product))
  const page_size = Math.ceil(totalProducts / limit) || 1
  const response = {
    message: 'Lấy các sản phẩm thành công',
    data: {
      products,
      pagination: {
        page,
        limit,
        page_size,
      },
    },
  }
  return responseSuccess(res, response)
}

const getAllProducts = async (req: Request, res: Response) => {
  let { category } = req.query
  let condition = {}
  if (category) {
    condition = { category: category }
  }
  let products: any = await ProductModel.find(condition)
    .populate({ path: 'category' })
    .sort({ createdAt: -1 })
    .select({ __v: 0, description: 0 })
    .lean()
  products = products.map((product) => handleImageProduct(product))
  const response = {
    message: 'Lấy tất cả sản phẩm thành công',
    data: products,
  }
  return responseSuccess(res, response)
}

const getProduct = async (req: Request, res: Response) => {
  let condition = { _id: req.params.product_id }
  const productDB: any = await ProductModel.findOneAndUpdate(
    condition,
    { $inc: { view: 1 } },
    { new: true }
  )
    .populate('category')
    .select({ __v: 0 })
    .lean()
  if (productDB) {
    const response = {
      message: 'Lấy sản phẩm thành công',
      data: handleImageProduct(productDB),
    }
    return responseSuccess(res, response)
  } else {
    throw new ErrorHandler(STATUS.NOT_FOUND, 'Không tìm thấy sản phẩm')
  }
}

const updateProduct = async (req: Request, res: Response) => {
  const form: Product = req.body
  const {
    name,
    description,
    category,
    image,
    rating,
    price,
    images,
    price_before_discount,
    quantity,
    sold,
    view,
  } = form
  const product = omitBy(
    {
      name,
      description,
      category,
      image,
      rating,
      price,
      images,
      price_before_discount,
      quantity,
      sold,
      view,
    },
    (value) => value === undefined || value === ''
  )
  const productDB = await ProductModel.findByIdAndUpdate(
    req.params.product_id,
    product,
    {
      new: true,
    }
  )
    .select({ __v: 0 })
    .lean()
  if (productDB) {
    const response = {
      message: 'Cập nhật sản phẩm thành công',
      data: handleImageProduct(productDB),
    }
    return responseSuccess(res, response)
  } else {
    throw new ErrorHandler(STATUS.NOT_FOUND, 'Không tìm thấy sản phẩm')
  }
}

const deleteProduct = async (req: Request, res: Response) => {
  const product_id = req.params.product_id
  const productDB: any = await ProductModel.findByIdAndDelete(product_id).lean()
  if (productDB) {
    removeImageProduct(productDB.image)
    removeManyImageProduct(productDB.images)
    return responseSuccess(res, { message: 'Xóa thành công' })
  } else {
    throw new ErrorHandler(STATUS.NOT_FOUND, 'Không tìm thấy sản phẩm')
  }
}

const deleteManyProducts = async (req: Request, res: Response) => {
  const list_id = (req.body.list_id as string[]).map((id: string) =>
    mongoose.Types.ObjectId(id)
  )
  const productDB: any = await ProductModel.find({
    _id: { $in: list_id },
  }).lean()
  const deletedData = await ProductModel.deleteMany({
    _id: { $in: list_id },
  }).lean()
  productDB.forEach((product) => {
    removeImageProduct(product.image)
    removeManyImageProduct(product.images)
  })
  if (productDB.length > 0) {
    return responseSuccess(res, {
      message: `Xóa ${deletedData.deletedCount} sản phẩm thành công`,
      data: { deleted_count: deletedData.deletedCount },
    })
  } else {
    throw new ErrorHandler(STATUS.NOT_FOUND, 'Không tìm thấy sản phẩm')
  }
}

const searchProduct = async (req: Request, res: Response) => {
  let { searchText }: { [key: string]: string | any } = req.query
  searchText = decodeURI(searchText)
  let condition = { $text: { $search: `\"${searchText}\"` } }
  if (!isAdmin(req)) {
    condition = Object.assign(condition, { visible: true })
  }
  let products: any = await ProductModel.find(condition)
    .populate('category')
    .sort({ createdAt: -1 })
    .select({ __v: 0, description: 0 })
    .lean()
  products = products.map((product) => handleImageProduct(product))
  const response = {
    message: 'Tìm các sản phẩm thành công',
    data: products,
  }
  return responseSuccess(res, response)
}

const uploadProductImage = async (req: Request, res: Response) => {
  const path = await uploadFile(req, FOLDERS.PRODUCT)
  const response = {
    message: 'Upload ảnh thành công',
    data: path,
  }
  return responseSuccess(res, response)
}

const uploadManyProductImages = async (req: Request, res: Response) => {
  const paths = await uploadManyFile(req, FOLDERS.PRODUCT)
  const response = {
    message: 'Upload các ảnh thành công',
    data: paths,
  }
  return responseSuccess(res, response)
}

const ProductController = {
  addProduct,
  getAllProducts,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  searchProduct,
  deleteManyProducts,
  uploadProductImage,
  uploadManyProductImages,
}

export default ProductController
