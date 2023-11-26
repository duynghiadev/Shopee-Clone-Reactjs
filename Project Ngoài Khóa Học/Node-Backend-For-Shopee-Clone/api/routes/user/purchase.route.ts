import { Router } from 'express'
import authMiddleware from '../../middleware/auth.middleware'
import helpersMiddleware from '../../middleware/helpers.middleware'
import * as purchaseMiddleware from '../../middleware/purchase.middleware'
import * as purchaseController from '../../controllers/purchase.controller'
import { wrapAsync } from '../../utils/response'

export const userPurchaseRouter = Router()

userPurchaseRouter.post(
  '/buy-products',
  purchaseMiddleware.buyProductsRules(),
  helpersMiddleware.entityValidator,
  authMiddleware.verifyAccessToken,
  wrapAsync(purchaseController.buyProducts)
)

userPurchaseRouter.post(
  '/add-to-cart',
  purchaseMiddleware.addToCartRules(),
  helpersMiddleware.entityValidator,
  authMiddleware.verifyAccessToken,
  wrapAsync(purchaseController.addToCart)
)

userPurchaseRouter.put(
  '/update-purchase',
  purchaseMiddleware.updatePurchaseRules(),
  helpersMiddleware.entityValidator,
  authMiddleware.verifyAccessToken,
  wrapAsync(purchaseController.updatePurchase)
)

userPurchaseRouter.delete(
  '',
  purchaseMiddleware.deletePurchasesRules(),
  helpersMiddleware.entityValidator,
  authMiddleware.verifyAccessToken,
  wrapAsync(purchaseController.deletePurchases)
)

userPurchaseRouter.get(
  '',
  authMiddleware.verifyAccessToken,
  wrapAsync(purchaseController.getPurchases)
)
