import { body, query } from 'express-validator'

const addCategoryRules = () => {
  return [
    body('name').exists({ checkFalsy: true }).withMessage("Tên không được để trống").isLength({ max: 160 }).withMessage("Tên phải ít hơn 160 kí tự"),
  ]
}

const updateCategoryRules = () => {
  return addCategoryRules()
}

const getCategoryRules = () => {
  return [
    query('exclude')
      .if((value: any) => value)
      .isMongoId()
      .withMessage('exclude không đúng định dạng')
  ]
}


const categoryMiddleware = { addCategoryRules, updateCategoryRules, getCategoryRules }

export default categoryMiddleware