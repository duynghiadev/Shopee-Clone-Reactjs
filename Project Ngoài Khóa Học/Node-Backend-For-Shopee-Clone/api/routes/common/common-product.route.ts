import { Router } from 'express'
import ProductController from '../../controllers/product.controller'
import productMiddleware from '../../middleware/product.middleware'
import helpersMiddleware from '../../middleware/helpers.middleware'
import { wrapAsync } from '../../utils/response'

const commonProductRouter = Router()
/**
 * [Get products paginate]
 * @queryParam type: string, page: number, limit: number, category:mongoId, exclude: mongoId product
 * @route products
 * @method get
 */
commonProductRouter.get(
  '',
  productMiddleware.getProductsRules(),
  helpersMiddleware.entityValidator,
  wrapAsync(ProductController.getProducts)
)

commonProductRouter.get(
  '/:product_id',
  helpersMiddleware.idRule('product_id'),
  helpersMiddleware.idValidator,
  wrapAsync(ProductController.getProduct)
)

commonProductRouter.get(
  '/search',
  wrapAsync(ProductController.searchProduct)
)
export default commonProductRouter
