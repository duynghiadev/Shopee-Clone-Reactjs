import { afterAll, afterEach, beforeAll } from 'vitest'
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import config from './src/constants/config'
import HttpStatusCode from './src/constants/httpStatusCode.enum'

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

export const restHandlers = [
  rest.post(`${config.baseUrl}login`, (req, res, ctx) => {
    return res(ctx.status(HttpStatusCode.Ok), ctx.json(loginRes))
  })
]

const server = setupServer(...restHandlers)

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

//  Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers())
