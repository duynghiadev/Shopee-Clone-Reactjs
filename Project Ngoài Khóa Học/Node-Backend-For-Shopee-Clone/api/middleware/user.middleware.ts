import { body } from 'express-validator'

const addUserRules = () => {
  return [
    body('email')
      .isEmail()
      .withMessage('Email không đúng định dạng')
      .isLength({ min: 6, max: 160 })
      .withMessage('Email phải từ 6-160 kí tự'),
    body('name')
      .exists({ checkFalsy: true })
      .withMessage('Tên không được để trống')
      .isLength({ max: 160 })
      .withMessage('Tên phải ít hơn 160 kí tự'),
    body('password')
      .isLength({ min: 6, max: 160 })
      .withMessage('Mật khẩu phải từ 6-160 kí tự'),
    body('date_of_birth')
      .if((value: any) => value !== undefined)
      .isISO8601()
      .withMessage('Ngày sinh không đúng định dạng'),
    body('address')
      .if((value: any) => value !== undefined)
      .isLength({ max: 160 })
      .withMessage('Địa chỉ phải ít hơn 160 kí tự'),
    body('phone')
      .if((value: any) => value !== undefined)
      .isLength({ max: 20 })
      .withMessage('SDT không được lớn hơn 20 kí tự'),
    body('roles')
      .exists({ checkFalsy: true })
      .withMessage('Phân quyền không được để trống')
      .custom((value) => {
        if (!Array.isArray(value)) {
          return false
        }
        if (value.some((item) => typeof item !== 'string')) {
          return false
        }
        return true
      })
      .withMessage('Role không đúng định dạng'),
    body('avatar')
      .if((value: any) => value !== undefined)
      .isString()
      .withMessage('avatar phải là string url')
      .isLength({ max: 1000 })
      .withMessage('URL avatar không được lớn hơn 1000 ký tự'),
  ]
}

const updateUserRules = () => {
  return [
    body('name')
      .if((value: any) => value !== undefined)
      .exists({ checkFalsy: true })
      .withMessage('Tên không được để trống')
      .isLength({ max: 160 })
      .withMessage('Tên phải ít hơn 160 kí tự'),
    body('date_of_birth')
      .if((value: any) => value !== undefined)
      .isISO8601()
      .withMessage('Ngày sinh không đúng định dạng'),
    body('address')
      .if((value: any) => value !== undefined)
      .isLength({ max: 160 })
      .withMessage('Địa chỉ phải ít hơn 160 kí tự'),
    body('phone')
      .if((value: any) => value !== undefined)
      .isLength({ max: 20 })
      .withMessage('SDT phải ít hơn 20 kí tự'),
    body('roles')
      .if((value: any) => value !== undefined)
      .custom((value) => {
        if (!Array.isArray(value)) {
          return false
        }
        if (value.some((item) => typeof item !== 'string')) {
          return false
        }
        return true
      })
      .withMessage('Role không đúng định dạng'),
    body('avatar')
      .if((value: any) => value !== undefined)
      .isString()
      .withMessage('avatar phải là string url')
      .isLength({ max: 1000 })
      .withMessage('URL avatar không được lớn hơn 1000 ký tự'),
    body('password')
      .if((value: any) => value !== undefined)
      .isLength({ min: 6, max: 160 })
      .withMessage('Mật khẩu phải từ 6-160 kí tự'),
    body('new_password')
      .if((value: any) => value !== undefined)
      .isLength({ min: 6, max: 160 })
      .withMessage('Mật khẩu mới phải từ 6-160 kí tự'),
  ]
}

const updateMeRules = () => {
  return [
    body('name')
      .if((value: any) => value !== undefined)
      .isString()
      .withMessage('Tên phải ở định dạng string')
      .isLength({ max: 160 })
      .withMessage('Tên phải ít hơn 160 kí tự'),
    body('date_of_birth')
      .if((value: any) => value !== undefined)
      .isISO8601()
      .withMessage('Ngày sinh không đúng định dạng'),
    body('address')
      .if((value: any) => value !== undefined)
      .isString()
      .withMessage('Địa chỉ phải ở định dạng string')
      .isLength({ max: 160 })
      .withMessage('Địa chỉ phải ít hơn 160 kí tự'),
    body('phone')
      .if((value: any) => value !== undefined)
      .isString()
      .withMessage('SDT phải ở định dạng string')
      .isLength({ max: 20 })
      .withMessage('SDT phải ít hơn 20 kí tự'),
    body('avatar')
      .if((value: any) => value !== undefined)
      .isString()
      .withMessage('avatar phải là string url')
      .isLength({ max: 1000 })
      .withMessage('URL avatar không được lớn hơn 1000 ký tự'),
    body('password')
      .if((value: any) => value !== undefined)
      .isString()
      .withMessage('Mật khẩu phải ở định dạng string')
      .isLength({ min: 6, max: 160 })
      .withMessage('Mật khẩu phải từ 6-160 kí tự'),
    body('new_password')
      .if((value: any) => value !== undefined)
      .isString()
      .withMessage('Mật khẩu mới phải ở định dạng string')
      .isLength({ min: 6, max: 160 })
      .withMessage('Mật khẩu mới phải từ 6-160 kí tự'),
  ]
}

const userMiddleware = { addUserRules, updateUserRules, updateMeRules }

export default userMiddleware
