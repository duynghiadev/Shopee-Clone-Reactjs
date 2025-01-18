import { Router } from 'express'
import {
  getProfileController,
  getProductsController,
  loginController,
  refreshTokenController
} from './controller.js'

const router = Router()

router.post('/login', async (req, res) => {
  const resData = await loginController(req)
  res.status(resData.status).send(resData.response)
})

router.post('/refresh-token', async (req, res) => {
  const resData = await refreshTokenController(req)
  res.status(resData.status).send(resData.response)
})

router.get('/profile', async (req, res) => {
  const resData = await getProfileController(req)
  res.status(resData.status).send(resData.response)
})

router.get('/products', async (req, res) => {
  const resData = await getProductsController(req)
  res.status(resData.status).send(resData.response)
})

export default router
