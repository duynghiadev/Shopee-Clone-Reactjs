import { Request } from 'express'
import { IncomingForm } from 'formidable'
import fs from 'fs'
import shelljs from 'shelljs'
import mv from 'mv'
import { ErrorHandler } from './response'
import { STATUS } from '../constants/status'
import { isEmpty } from 'lodash'
import { v4 as uuidv4 } from 'uuid'
import { FOLDER_UPLOAD } from '../constants/config'

const getExtension = (filename: string) => /(?:\.([^.]+))?$/.exec(filename)[1]

const upload = (image, folder) => {
  return new Promise((resolve, reject) => {
    const dir = `${FOLDER_UPLOAD}${folder ? '/' + folder : ''}`
    if (!fs.existsSync(dir)) {
      shelljs.mkdir('-p', dir)
    }
    const tmpPath = image.path
    const newName = uuidv4() + '.' + getExtension(image.name)
    const newPath = dir + '/' + newName
    mv(tmpPath, newPath, function (err) {
      if (err)
        return reject(
          new ErrorHandler(STATUS.INTERNAL_SERVER_ERROR, 'Lỗi đổi tên file')
        )
      resolve(newName)
    })
  })
}

export const uploadFile = (req: Request, folder = '') => {
  return new Promise<string>((resolve, reject) => {
    const form: any = new IncomingForm()
    form.parse(req, function (error, fields, files) {
      if (error) {
        return reject(error)
      }
      try {
        const { image }: { image: any } = files
        const errorEntity: any = {}
        if (!image) {
          errorEntity.image = 'Không tìm thấy image'
        } else if (!image.type.includes('image')) {
          errorEntity.image = 'image không đúng định dạng'
        }
        if (!isEmpty(errorEntity)) {
          return reject(
            new ErrorHandler(STATUS.UNPROCESSABLE_ENTITY, errorEntity)
          )
        }
        upload(image, folder)
          .then((res: string) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      } catch (err) {
        reject(err)
      }
    })
  })
}

export const uploadManyFile = (req: Request, folder = '') => {
  return new Promise<string[]>((resolve, reject) => {
    const form: any = new IncomingForm({ multiples: true })
    form.parse(req, function (error, fields, files) {
      if (error) {
        return reject(error)
      }
      try {
        const { images }: { images: any[] } = files
        const errorEntity: any = {}
        if (!images) {
          errorEntity.image = 'Không tìm thấy images'
        } else if (images.some((image) => !image.type.includes('image'))) {
          errorEntity.image = 'image không đúng định dạng'
        }
        if (!isEmpty(errorEntity)) {
          return reject(
            new ErrorHandler(STATUS.UNPROCESSABLE_ENTITY, errorEntity)
          )
        }
        const chainUpload = images.map((image) => {
          return upload(image, folder)
        })
        Promise.all(chainUpload)
          .then((res: string[]) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      } catch (err) {
        reject(err)
      }
    })
  })
}
