import { ErrorHandler, responseSuccess } from '../utils/response'
import { hashValue, compareValue } from '../utils/crypt'
import { config } from '../constants/config'
import { signToken } from '../utils/jwt'
import { Request, Response } from 'express'
import { ROLE } from '../constants/role.enum'
import { UserModel } from '../database/models/user.model'
import { AccessTokenModel } from '../database/models/access-token.model'
import { omit } from 'lodash'
import { STATUS } from '../constants/status'

const registerController = async (req: Request, res: Response) => {
  const body: Register = req.body
  const { email, password } = body
  const userInDB = await UserModel.findOne({ email: email }).exec()
  if (!userInDB) {
    const hashedPassword = hashValue(password)
    const user = {
      email,
      password: hashedPassword,
    }
    const userAdd = await (await new UserModel(user).save()).toObject()
    const payloadJWT: PayloadToken = {
      email,
      id: userAdd._id,
      roles: [ROLE.USER],
      created_at: new Date().toISOString(),
    }
    const access_token = await signToken(
      payloadJWT,
      config.SECRET_KEY,
      config.EXPIRE_ACCESS_TOKEN
    )
    await new AccessTokenModel({
      user_id: userAdd._id,
      token: access_token,
    }).save()
    const response = {
      message: 'Đăng ký thành công',
      data: {
        access_token: 'Bearer ' + access_token,
        expires: config.EXPIRE_ACCESS_TOKEN,
        user: omit(userAdd, ['password']),
      },
    }
    return responseSuccess(res, response)
  }
  throw new ErrorHandler(STATUS.UNPROCESSABLE_ENTITY, {
    email: 'Email đã tồn tại',
  })
}

const loginController = async (req: Request, res: Response) => {
  const body: Login = req.body
  const { email, password } = body
  const userInDB: any = await UserModel.findOne({ email: email }).lean()
  if (!userInDB) {
    throw new ErrorHandler(STATUS.UNPROCESSABLE_ENTITY, {
      password: 'Email hoặc password không đúng',
    })
  } else {
    const match = compareValue(password, userInDB.password)
    if (!match) {
      throw new ErrorHandler(STATUS.UNPROCESSABLE_ENTITY, {
        password: 'Email hoặc password không đúng',
      })
    }
    let payloadJWT: PayloadToken = {
      id: userInDB._id,
      email: userInDB.email,
      roles: userInDB.roles,
      created_at: new Date().toISOString(),
    }
    const access_token = await signToken(
      payloadJWT,
      config.SECRET_KEY,
      config.EXPIRE_ACCESS_TOKEN
    )

    await new AccessTokenModel({
      user_id: userInDB._id,
      token: access_token,
    }).save()
    const response = {
      message: 'Đăng nhập thành công',
      data: {
        access_token: 'Bearer ' + access_token,
        expires: config.EXPIRE_ACCESS_TOKEN,
        user: omit(userInDB, ['password']),
      },
    }
    return responseSuccess(res, response)
  }
}

const logoutController = async (req: Request, res: Response) => {
  const access_token = req.headers.authorization?.replace('Bearer ', '')
  await AccessTokenModel.findOneAndDelete({
    token: access_token,
  }).exec()
  return responseSuccess(res, { message: 'Đăng xuất thành công' })
}

const authController = {
  registerController,
  loginController,
  logoutController,
}

export default authController
