import { purchaseStatus } from 'src/constants/status'
import http from 'src/utils/http'

const URL = 'purchases'

const purchaseApi = {
  addToCart(data) {
    return http.post(`${URL}/add-to-cart`, data)
  },
  getCartPurchases() {
    return http.get(URL, {
      params: {
        status: purchaseStatus.inCart
      }
    })
  },
  getPurchases(status) {
    return http.get(URL, {
      params: {
        status
      }
    })
  },
  updatePurchase(data) {
    return http.put(`${URL}/update-purchase`, data)
  },
  deletePurchases(data) {
    return http.delete(`${URL}`, data)
  },
  buyPurchases(data) {
    return http.post(`${URL}/buy-products`, data)
  }
}

export default purchaseApi
