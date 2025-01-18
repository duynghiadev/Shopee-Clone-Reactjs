import jwt from 'jsonwebtoken'
import config from '../config.js'
import { STATUS } from '../constants.js'

export const signToken = (payload, token_life) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      config.jwt_secret_key,
      { expiresIn: token_life },
      (error, token) => {
        if (error) {
          return reject(error)
        }
        resolve(token)
      }
    )
  })
}

export const verifyToken = (token, tokenType = 'ACCESS_TOKEN') => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.jwt_secret_key, (error, decoded) => {
      if (error) {
        if (error.name === 'TokenExpiredError') {
          const errorResponse = {
            status: STATUS.UNAUTHORIZED,
            error: {
              message: `${tokenType} hết hạn`,
              name: `EXPIRED_${tokenType}`
            }
          }
          reject(errorResponse)
        } else {
          const errorResponse = {
            status: STATUS.UNAUTHORIZED,
            error: {
              message: `${tokenType} không đúng`,
              name: `INVALID_${tokenType}`
            }
          }
          reject(errorResponse)
        }
      }
      resolve(decoded)
    })
  })
}
