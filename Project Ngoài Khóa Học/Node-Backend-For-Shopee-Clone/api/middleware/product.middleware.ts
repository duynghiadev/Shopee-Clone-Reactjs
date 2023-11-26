import { body, query } from 'express-validator'
import { isMongoId } from '../utils/validate'

const getProductsRules = () => {
  return [
    query('page')
      .if((value) => value !== undefined)
      .isInt()
      .withMessage('page không đúng định dạng'),
    query('limit')
      .if((value) => value !== undefined)
      .isInt()
      .withMessage('limit không đúng định dạng'),
    query('category')
      .if((value: any) => value !== undefined)
      .isMongoId()
      .withMessage('category không đúng định dạng'),
    query('exclude')
      .if((value: any) => value !== undefined)
      .isMongoId()
      .withMessage('exclude không đúng định dạng'),
  ]
}

const getAllProductsRules = () => {
  return [
    query('category')
      .if((value: any) => value !== undefined)
      .isMongoId()
      .withMessage('category không đúng định dạng'),
  ]
}

const getPagesRules = () => {
  return [
    query('limit').isInt().withMessage('limit không đúng định dạng'),
    query('category')
      .if((value: any) => value !== undefined)
      .isMongoId()
      .withMessage('category không đúng định dạng'),
  ]
}

const addProductRules = () => {
  return [
    body('name')
      .exists({ checkFalsy: true })
      .withMessage('Tiêu đề không được để trống')
      .isLength({ max: 160 })
      .withMessage('Tiêu đề  phải ít hơn 160 kí tự'),
    body('image')
      .exists({ checkFalsy: true })
      .withMessage('image không được để trống')
      .isLength({ max: 1000 })
      .withMessage('image  phải ít hơn 1000 kí tự'),
    body('images')
      .if((value: any) => value !== undefined)
      .isArray()
      .withMessage('images phải dạng string[]'),
    body('category')
      .exists({ checkFalsy: true })
      .withMessage('category không được để trống')
      .isMongoId()
      .withMessage(`category phải là id`),
    body('price')
      .if((value: any) => value !== undefined)
      .isNumeric()
      .withMessage('price phải ở định dạng number'),
    body('price_before_discount')
      .if((value: any) => value !== undefined)
      .isNumeric()
      .withMessage('price_before_discount phải ở định dạng number'),
    body('quantity')
      .if((value: any) => value !== undefined)
      .isNumeric()
      .withMessage('quantity phải ở định dạng number'),
    body('view')
      .if((value: any) => value !== undefined)
      .isNumeric()
      .withMessage('view phải ở định dạng number'),
    body('sold')
      .if((value: any) => value !== undefined)
      .isNumeric()
      .withMessage('sold phải ở định dạng number'),
    body('rating')
      .if((value: any) => value !== undefined)
      .isNumeric()
      .withMessage('rating phải ở định dạng number'),
  ]
}

const updateProductRules = () => {
  return addProductRules()
}

const ProductMiddleware = {
  addProductRules,
  updateProductRules,
  getProductsRules,
  getPagesRules,
  getAllProductsRules,
}

export default ProductMiddleware
