require('dotenv').config()

export const isProduction =
  process.env.NODE_ENV === 'production' || process.argv[2] === 'production'

export const HOST = isProduction
  ? process.env.PRODUCTION_HOST
  : `http://${process.env.HOST}:${process.env.PORT}`

export function removeAccents(str) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
}
