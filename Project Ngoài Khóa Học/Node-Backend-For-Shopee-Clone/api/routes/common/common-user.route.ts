import { Router } from 'express'
import authMiddleware from '../../middleware/auth.middleware'
import userController from '../../controllers/user.controller'
import { wrapAsync } from '../../utils/response'
import userMiddleware from '../../middleware/user.middleware'
import helpersMiddleware from '../../middleware/helpers.middleware'
const commonUserRouter = Router()

commonUserRouter.get(
  '/me',
  authMiddleware.verifyAccessToken,
  wrapAsync(userController.getDetailMySelf)
)
commonUserRouter.put(
  '/me',
  authMiddleware.verifyAccessToken,
  userMiddleware.updateUserRules(),
  helpersMiddleware.entityValidator,
  wrapAsync(userController.updateMe)
)
export default commonUserRouter
