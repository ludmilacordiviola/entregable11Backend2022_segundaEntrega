import express from 'express'
import { productControllerGet, productControllerPost, productControllerPut, productControllerDelete} from '../controllers/productsController.js'
import { validAdmin } from '../utils/middleware.js'

const router = express.Router()

router.get('/products/:id?', productControllerGet)
router.post('/products', validAdmin, productControllerPost)
router.put('/products/:id', validAdmin, productControllerPut)
router.delete('/products/:id', validAdmin, productControllerDelete)

export default router