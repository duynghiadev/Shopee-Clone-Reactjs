import { Router } from 'express'
import helpersMiddleware from '../../middleware/helpers.middleware'
import authMiddleware from '../../middleware/auth.middleware'
import ProductController from '../../controllers/product.controller'
import productMiddleware from '../../middleware/product.middleware'
import { wrapAsync } from '../../utils/response'

const adminProductRouter = Router()
/**
 * [Get products paginate]
 * @queryParam type: string, page: number, limit: number, category:mongoId
 * @route admin/products
 * @method get
 */
adminProductRouter.get(
  '',
  authMiddleware.verifyAccessToken,
  authMiddleware.verifyAdmin,
  productMiddleware.getProductsRules(),
  helpersMiddleware.entityValidator,
  wrapAsync(ProductController.getProducts)
)
/**
 * [Get all products ]
 * @queryParam type: string, category:mongoId
 * @route admin/products/all
 * @method get
 */
adminProductRouter.get(
  '/all',
  authMiddleware.verifyAccessToken,
  authMiddleware.verifyAdmin,
  productMiddleware.getAllProductsRules(),
  helpersMiddleware.entityValidator,
  wrapAsync(ProductController.getAllProducts)
)

adminProductRouter.get(
  '/:product_id',
  authMiddleware.verifyAccessToken,
  authMiddleware.verifyAdmin,
  helpersMiddleware.idRule('product_id'),
  helpersMiddleware.idValidator,
  wrapAsync(ProductController.getProduct)
)
adminProductRouter.post(
  '',
  authMiddleware.verifyAccessToken,
  authMiddleware.verifyAdmin,
  productMiddleware.addProductRules(),
  helpersMiddleware.entityValidator,
  wrapAsync(ProductController.addProduct)
)
adminProductRouter.put(
  '/:product_id',
  authMiddleware.verifyAccessToken,
  authMiddleware.verifyAdmin,
  helpersMiddleware.idRule('product_id'),
  helpersMiddleware.idValidator,
  productMiddleware.updateProductRules(),
  helpersMiddleware.entityValidator,
  wrapAsync(ProductController.updateProduct)
)

adminProductRouter.delete(
  '/delete/:product_id',
  authMiddleware.verifyAccessToken,
  authMiddleware.verifyAdmin,
  helpersMiddleware.idRule('product_id'),
  helpersMiddleware.idValidator,
  wrapAsync(ProductController.deleteProduct)
)

adminProductRouter.delete(
  '/delete-many',
  authMiddleware.verifyAccessToken,
  authMiddleware.verifyAdmin,
  helpersMiddleware.listIdRule('list_id'),
  helpersMiddleware.idValidator,
  wrapAsync(ProductController.deleteManyProducts)
)

adminProductRouter.post(
  '/upload-image',
  authMiddleware.verifyAccessToken,
  authMiddleware.verifyAdmin,
  wrapAsync(ProductController.uploadProductImage)
)
adminProductRouter.post(
  '/upload-images',
  authMiddleware.verifyAccessToken,
  authMiddleware.verifyAdmin,
  wrapAsync(ProductController.uploadManyProductImages)
)
export default adminProductRouter
