import express from 'express'
import { cartControllerDelete, cartControllerGet, cartControllerPost, cartControllerProductDelete, cartControllerProductsPost } from '../controllers/cartsController.js'

const router = express.Router()

router.get('/carts/:id/products', cartControllerGet)
router.post('/carts', cartControllerPost)
router.post('/carts/:id/products', cartControllerProductsPost)
router.delete('/carts/:id', cartControllerDelete)
router.delete('/carts/:id/products/:id_prod', cartControllerProductDelete)

export default router