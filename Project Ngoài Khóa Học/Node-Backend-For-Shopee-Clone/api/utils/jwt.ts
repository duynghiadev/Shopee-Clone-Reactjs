import jwt from "jsonwebtoken"
import { STATUS } from "../constants/status"
import { ErrorHandler } from "./response"

export const signToken = (
  payload: string | object | Buffer,
  secret_key: string,
  token_life: number | string
) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, secret_key, { expiresIn: token_life }, (error, token) => {
      if (error) {
        return reject(error)
      }
      resolve(token)
    })
  })
}
export const verifyToken = (token: string, secret_key: string) => {
  return new Promise<string | object>((resolve, reject) => {
    jwt.verify(token, secret_key, (error, decoded) => {
      if (error) {
        if(error.name === "TokenExpiredError") {
          reject(new ErrorHandler(STATUS.UNAUTHORIZED, {
            message: "Token hết hạn",
            name: "EXPIRED_TOKEN" 
          }))
        } else {
          reject(new ErrorHandler(STATUS.UNAUTHORIZED, "Token không đúng"))
        }
      }
      resolve(decoded as object)
    })
  })
}
