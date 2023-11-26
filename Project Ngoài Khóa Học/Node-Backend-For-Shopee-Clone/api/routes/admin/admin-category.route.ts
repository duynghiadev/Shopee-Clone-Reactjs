import { Router } from 'express'
import helpersMiddleware from '../../middleware/helpers.middleware'
import authMiddleware from '../../middleware/auth.middleware'
import categoryController from '../../controllers/category.controller'
import categoryMiddleware from '../../middleware/category.middleware'
import { wrapAsync } from '../../utils/response'

const adminCategoryRouter = Router()
adminCategoryRouter.get(
  '',
  authMiddleware.verifyAccessToken,
  authMiddleware.verifyAdmin,
  categoryMiddleware.getCategoryRules(),
  helpersMiddleware.entityValidator,
  wrapAsync(categoryController.getCategories)
)
adminCategoryRouter.get(
  '/:category_id',
  authMiddleware.verifyAccessToken,
  authMiddleware.verifyAdmin,
  helpersMiddleware.idRule('category_id'),
  helpersMiddleware.idValidator,
  wrapAsync(categoryController.getCategory)
)
adminCategoryRouter.post(
  '',
  authMiddleware.verifyAccessToken,
  authMiddleware.verifyAdmin,
  categoryMiddleware.addCategoryRules(),
  helpersMiddleware.entityValidator,
  wrapAsync(categoryController.addCategory)
)
adminCategoryRouter.put(
  '/:category_id',
  authMiddleware.verifyAccessToken,
  authMiddleware.verifyAdmin,
  helpersMiddleware.idRule('category_id'),
  helpersMiddleware.idValidator,
  categoryMiddleware.updateCategoryRules(),
  helpersMiddleware.entityValidator,
  wrapAsync(categoryController.updateCategory)
)
adminCategoryRouter.delete(
  '/delete/:category_id',
  authMiddleware.verifyAccessToken,
  authMiddleware.verifyAdmin,
  helpersMiddleware.idRule('category_id'),
  helpersMiddleware.idValidator,
  wrapAsync(categoryController.deleteCategory)
)
export default adminCategoryRouter
