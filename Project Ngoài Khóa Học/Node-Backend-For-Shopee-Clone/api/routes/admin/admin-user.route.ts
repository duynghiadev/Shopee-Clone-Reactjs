import { Router } from 'express'
import userController from '../../controllers/user.controller'
import helpersMiddleware from '../../middleware/helpers.middleware'
import userMiddleware from '../../middleware/user.middleware'
import authMiddleware from '../../middleware/auth.middleware'
import { wrapAsync } from '../../utils/response'

const adminUserRouter = Router()
adminUserRouter.get(
  '',
  authMiddleware.verifyAccessToken,
  authMiddleware.verifyAdmin,
  userController.getUsers
)
adminUserRouter.post(
  '',
  authMiddleware.verifyAccessToken,
  authMiddleware.verifyAdmin,
  userMiddleware.addUserRules(),
  helpersMiddleware.entityValidator,
  wrapAsync(userController.addUser)
)
adminUserRouter.put(
  '/:user_id',
  authMiddleware.verifyAccessToken,
  authMiddleware.verifyAdmin,
  helpersMiddleware.idRule('user_id'),
  helpersMiddleware.idValidator,
  userMiddleware.updateUserRules(),
  helpersMiddleware.entityValidator,
  wrapAsync(userController.updateUser)
)
adminUserRouter.get(
  '/:user_id',
  authMiddleware.verifyAccessToken,
  authMiddleware.verifyAdmin,
  helpersMiddleware.idRule('user_id'),
  helpersMiddleware.idValidator,
  wrapAsync(userController.deleteUser)
)
adminUserRouter.delete(
  '/delete/:user_id',
  authMiddleware.verifyAccessToken,
  authMiddleware.verifyAdmin,
  helpersMiddleware.idRule('user_id'),
  helpersMiddleware.idValidator,
  wrapAsync(userController.deleteUser)
)
export default adminUserRouter
