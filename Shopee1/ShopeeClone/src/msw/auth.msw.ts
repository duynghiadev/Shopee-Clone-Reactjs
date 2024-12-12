import { rest } from 'msw'
import config from 'src/constants/config'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'

export const access_token_1s =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWJhZDZlMWFmYzJlMWExZjk2YjI4MyIsImVtYWlsIjoiYnVja0BnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDIzLTA3LTI5VDA3OjQ1OjE3LjMwNFoiLCJpYXQiOjE2OTA2MTY3MTcsImV4cCI6MTY5MDYxNjcxOH0.9sI3u26EEVkkSKNaN0lYfkAZscV3pOvnOs6J3AagzU0'

export const refresh_token_1000days =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWJhZDZlMWFmYzJlMWExZjk2YjI4MyIsImVtYWlsIjoiYnVja0BnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDIzLTA3LTI5VDA3OjQ4OjU0LjE2M1oiLCJpYXQiOjE2OTA2MTY5MzQsImV4cCI6NzQ2NjY1MDYxNjkzNH0.girHG88p9u9UFy4qS6v6ZHuBFNrWPr7LM_FRlbooSHA'

export const access_token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmY5MzVlNWZkYzVmMDM3ZTZmNjhkMyIsImVtYWlsIjoiZDNAZ21haWwuY29tIiwicm9sZXMiOlsiVXNlciJdLCJjcmVhdGVkX2F0IjoiMjAyMi0xMi0xOVQxMzo1ODo0OC40ODlaIiwiaWF0IjoxNjcxNDU4MzI4LCJleHAiOjE2ODE0NTgzMjd9.00oi-93dF4Wz2Ngb6_G2dXO4VQXf2cRCft3W8DKgPdA'

const loginRes = {
  message: 'Đăng nhập thành công',
  data: {
    access_token:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWJhZDZlMWFmYzJlMWExZjk2YjI4MyIsImVtYWlsIjoiYnVja0BnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDIzLTA3LTMwVDA3OjIyOjI4Ljk0MloiLCJpYXQiOjE2OTA3MDE3NDgsImV4cCI6MTY5MDc4ODE0OH0.DyJfCxeHwJ2MIdo0SsgnDRpVJIknsqVaRyqkIZESahM',
    expires: 999999,
    refresh_token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWJhZDZlMWFmYzJlMWExZjk2YjI4MyIsImVtYWlsIjoiYnVja0BnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDIzLTA3LTI4VDA2OjM2OjM2LjI0OFoiLCJpYXQiOjE2OTA1MjYxOTYsImV4cCI6MTcwNDM1MDE5Nn0.rO5OKQYYbXboroZR0lm2Rq8V7U9LutCcNeHxKtqfIu4',
    expires_refresh_token: 86400000,
    user: {
      _id: '64abad6e1afc2e1a1f96b283',
      roles: ['User'],
      email: 'buck@gmail.com',
      createdAt: '2023-07-10T07:04:14.644Z',
      updatedAt: '2023-07-26T09:34:40.346Z',
      __v: 0,
      avatar: '003f02dd-a5c8-49a8-a284-22e94112014c.jpg',
      name: 'kid buck'
    }
  }
}

const refreshTokenRes = {
  message: 'Refresh Token thành công',
  data: {
    access_token:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmY5MzVlNWZkYzVmMDM3ZTZmNjhkMyIsImVtYWlsIjoiZDNAZ21haWwuY29tIiwicm9sZXMiOlsiVXNlciJdLCJjcmVhdGVkX2F0IjoiMjAyMi0xMi0xOVQwNzozMTowMC4yNTJaIiwiaWF0IjoxNjcxNDM1MDYwLCJleHAiOjE2NzIwMzk4NjB9.vTHglpuxad5h_CPpIaDCUpW0xJPYarJzLFeeul0W61E'
  }
}

const loginRequest = rest.post(`${config.baseUrl}login`, (req, res, ctx) => {
  return res(ctx.status(HttpStatusCode.Ok), ctx.json(loginRes))
})

const refreshToken = rest.post(`${config.baseUrl}refresh-access-token`, (req, res, ctx) => {
  return res(ctx.status(HttpStatusCode.Ok), ctx.json(refreshTokenRes))
})

const authRequests = [loginRequest, refreshToken]

export default authRequests
