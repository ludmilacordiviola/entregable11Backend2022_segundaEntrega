import ContenedorFirebase from "../../contenedor/contenedorFirebase.js";

class CartDaoFirebase extends ContenedorFirebase {
  constructor() {
    super("carts");
  }

  async getById(id){
    const doc = await this.collection.doc(id).get()
    const data = doc.data().products

    return data
  }

  async createDocument(){
    const newProduct = this.collection.doc()
    await newProduct.create({
      products: []
    })

    return newProduct.id
  }

  async deleteProductInCart(cartId, productId){
    const docToModify = this.collection.doc(cartId)
    const getDoc = await docToModify.get()
    const productsInCart = getDoc.data().products

    const newProductsInCart = productsInCart.filter( product => product.productId != productId )
    const paramToUpdate = { products: newProductsInCart }
    
    const updateDoc = await docToModify.update(paramToUpdate)
    
    const modifiedDoc = await (await this.collection.doc(cartId).get()).data()
    return modifiedDoc
  }
  
}

export default CartDaoFirebase;
