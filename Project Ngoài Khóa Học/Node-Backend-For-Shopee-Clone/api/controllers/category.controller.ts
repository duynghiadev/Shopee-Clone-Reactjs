import { Request, Response } from 'express'
import { responseSuccess, ErrorHandler } from '../utils/response'
import { STATUS } from '../constants/status'
import { CategoryModel } from '../database/models/category.model'

const addCategory = async (req: Request, res: Response) => {
  const name: string = req.body.name
  const categoryAdd = await new CategoryModel({ name }).save()
  const response = {
    message: 'Tạo Category thành công',
    data: categoryAdd.toObject({
      transform: (doc, ret, option) => {
        delete ret.__v
        return ret
      },
    }),
  }
  return responseSuccess(res, response)
}

const getCategories = async (req: Request, res: Response) => {
  const { exclude } = req.query
  let condition = exclude ? { _id: { $ne: exclude } } : {}
  const categories = await CategoryModel.find(condition)
    .select({ __v: 0 })
    .lean()
  const response = {
    message: 'Lấy categories thành công',
    data: categories,
  }
  return responseSuccess(res, response)
}

const getCategory = async (req: Request, res: Response) => {
  const categoryDB = await CategoryModel.findById(req.params.category_id)
    .select({ __v: 0 })
    .lean()
  if (categoryDB) {
    const response = {
      message: 'Lấy category thành công',
      data: categoryDB,
    }
    return responseSuccess(res, response)
  } else {
    throw new ErrorHandler(STATUS.BAD_REQUEST, 'Không tìm thấy Category')
  }
}

const updateCategory = async (req: Request, res: Response) => {
  const { name } = req.body
  const categoryDB = await CategoryModel.findByIdAndUpdate(
    req.params.category_id,
    { name },
    { new: true }
  )
    .select({ __v: 0 })
    .lean()
  if (categoryDB) {
    const response = {
      message: 'Cập nhật category thành công',
      data: categoryDB,
    }
    return responseSuccess(res, response)
  } else {
    throw new ErrorHandler(STATUS.BAD_REQUEST, 'Không tìm thấy Category')
  }
}

const deleteCategory = async (req: Request, res: Response) => {
  const category_id = req.params.category_id
  const categoryDB = await CategoryModel.findByIdAndDelete(category_id).lean()
  if (categoryDB) {
    return responseSuccess(res, { message: 'Xóa thành công' })
  } else {
    throw new ErrorHandler(STATUS.BAD_REQUEST, 'Không tìm thấy Category')
  }
}

const categoryController = {
  addCategory,
  getCategory,
  getCategories,
  updateCategory,
  deleteCategory,
}

export default categoryController
