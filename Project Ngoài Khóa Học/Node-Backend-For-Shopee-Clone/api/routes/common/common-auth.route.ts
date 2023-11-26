import { Router } from 'express'
import authController from '../../controllers/auth.controller'
import authMiddleware from '../../middleware/auth.middleware'
import helpersMiddleware from '../../middleware/helpers.middleware'
import { wrapAsync } from '../../utils/response'

const commonAuthRouter = Router()

commonAuthRouter.post(
  '/login',
  authMiddleware.loginRules(),
  helpersMiddleware.entityValidator,
  wrapAsync(authController.loginController)
)

commonAuthRouter.post(
  '/logout',
  authMiddleware.verifyAccessToken,
  wrapAsync(authController.logoutController)
)

commonAuthRouter.post(
  '/register',
  authMiddleware.registerRules(),
  helpersMiddleware.entityValidator,
  wrapAsync(authController.registerController)
)
export default commonAuthRouter
