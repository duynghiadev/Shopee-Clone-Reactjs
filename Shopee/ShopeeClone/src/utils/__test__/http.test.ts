import { beforeEach, describe, expect, it } from 'vitest'
import { Http } from '../http'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'
import { setAccessTokenToLS, setRefreshTokenToLS } from '../auth'

describe('http axios', () => {
  let http = new Http().instance

  beforeEach(() => {
    localStorage.clear()
    http = new Http().instance
  })

  const access_token_1s =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWJhZDZlMWFmYzJlMWExZjk2YjI4MyIsImVtYWlsIjoiYnVja0BnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDIzLTA3LTI5VDA3OjQ1OjE3LjMwNFoiLCJpYXQiOjE2OTA2MTY3MTcsImV4cCI6MTY5MDYxNjcxOH0.9sI3u26EEVkkSKNaN0lYfkAZscV3pOvnOs6J3AagzU0'

  const refresh_token_1000days =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWJhZDZlMWFmYzJlMWExZjk2YjI4MyIsImVtYWlsIjoiYnVja0BnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDIzLTA3LTI5VDA3OjQ4OjU0LjE2M1oiLCJpYXQiOjE2OTA2MTY5MzQsImV4cCI6NzQ2NjY1MDYxNjkzNH0.girHG88p9u9UFy4qS6v6ZHuBFNrWPr7LM_FRlbooSHA'

  it('Gọi API', async () => {
    /**
     * ❌❌ Lưu ý: ❌❌
     * - Không nên đụng đến thư mục APIs
     * - Ví chúng ta test riêng file http thì chỉ "nên" dùng http thôi
     * - Vì lỡ như thư mục APIs có thay đổi gì đó
     * - Thì cũng không ảnh hưởng gì đến file test này
     */
    const res = await http.get('products')
    expect(res.status).toBe(HttpStatusCode.Ok)
  })

  it('Auth Request', async () => {
    /**
     * ❌❌ Lưu ý: ❌❌
     * - Nên có 1 cái Account test
     * - Và 1 Server test
     */
    await http.post('login', {
      email: 'buck@gmail.com',
      password: '123456'
    })
    const res = await http.get('me')
    expect(res.status).toBe(HttpStatusCode.Ok)
  })

  it('Refresh Token', async () => {
    setAccessTokenToLS(access_token_1s)
    setRefreshTokenToLS(refresh_token_1000days)

    const httpNew = new Http().instance
    const res = await httpNew.get('me')

    expect(res.status).toBe(HttpStatusCode.Ok)
  })
})
