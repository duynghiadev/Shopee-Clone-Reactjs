import http from 'src/utils/http'

const URL = 'products'

export const productApi = {
  getProducts(config) {
    return http.get(URL, config)
  },
  getProductDetail(id) {
    return http.get(`${URL}/${id}`)
  }
}

export default productApi
