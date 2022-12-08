import { Router } from "express";
import { productControllerGet, productControllerPost, productControllerPut, productControllerDelete} from '../controllers/productsController.js'
import { cartControllerDelete, cartControllerGet, cartControllerPost, cartControllerProductDelete, cartControllerProductsPost } from '../controllers/cartsController.js'
import { validAdmin } from '../utils/middleware.js'

const router = Router()

router.get('/products/:id?', productControllerGet)
router.post('/products', validAdmin, productControllerPost)
router.put('/products/:id', validAdmin, productControllerPut)
router.delete('/products/:id', validAdmin, productControllerDelete)

router.get('/carts/:id/products', cartControllerGet)
router.post('/carts', cartControllerPost)
router.post('/carts/:id/products', cartControllerProductsPost)
router.delete('/carts/:id', cartControllerDelete)
router.delete('/carts/:id/products/:id_prod', cartControllerProductDelete)

export default router 