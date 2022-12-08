import ContenedorMongo from "../../contenedor/contenedorMongo.js";
import mongoose from "mongoose";


class CartDaoMongo extends ContenedorMongo {
    constructor() {
        super( "cart", new mongoose.Schema(
            {
                products: [{
                    productId:{type: mongoose.Schema.Types.ObjectId, ref: "products"},
                    quantity: { type: Number }
                }]
            }
        ))
    }

    async getById(id) {
        const doc = await this.collection.find({ _id: id }, {products: 1, _id:0})
        return doc[0].products
    }

    async deleteProductInCart(cartId, productId){
        const cart = await this.collection.find({ _id: cartId })
        const productsInCar = cart[0].products
        const newCartProducts = productsInCar.filter( product => product.productId != productId )

        const doc = await this.collection.updateOne({ _id: cartId }, { $set: { products : newCartProducts }} )
 
        return `Producto eliminado del carrito :)`
    }
}

export default CartDaoMongo