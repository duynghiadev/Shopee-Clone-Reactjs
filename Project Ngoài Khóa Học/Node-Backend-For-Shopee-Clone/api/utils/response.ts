import { Response, Request, NextFunction } from 'express'
import { STATUS } from '../constants/status'

export const wrapAsync = (func: Function) => {
  return function (req: Request, res: Response, next: NextFunction) {
    func(req, res, next).catch(next)
  }
}

export class ErrorHandler extends Error {
  status: number
  error: string | ErrorThrow
  constructor(status: number, error: string | ErrorThrow) {
    super()
    this.status = status
    this.error = error
  }
}

export const responseError = (res: Response, error: ErrorHandler | any) => {
  if (error instanceof ErrorHandler) {
    const status = error.status
    // Case just string
    if (typeof error.error === 'string') {
      const message = error.error
      return res.status(status).send({ message })
    }
    // Case error is object
    const errorObject = error.error
    return res.status(status).send({
      message: 'Lỗi',
      data: errorObject,
    })
  }
  return res
    .status(STATUS.INTERNAL_SERVER_ERROR)
    .send({ message: error.message })
}

export const responseSuccess = (res: Response, data: SuccessResponse) => {
  return res.status(STATUS.OK).send(data)
}
