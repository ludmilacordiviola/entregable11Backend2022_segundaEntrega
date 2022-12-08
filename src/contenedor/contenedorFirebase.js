import config from "../config.js";
import admin from "firebase-admin";

admin.initializeApp({
  credential: admin.credential.cert(config.firebase),
});

const db = admin.firestore();
console.log("Conectado a Firebase")

class ContenedorFirebase {
  constructor(nombreCollection) {
    this.collection = db.collection(nombreCollection);
  }

  async getById(id) {
    const doc = await this.collection.doc(id).get();
    const data = doc.data();

    return { ...data, id };
  }

  async getAll(){
    const doc = await this.collection.get()
    const productsDoc = doc.docs

    const response = productsDoc.map( product => ({
      id: product.id,
      title: product.data().title,
      description: product.data().description,
      code: product.data().code,
      thumbnail: product.data().thumbnail,
      price: product.data().price,
      stock: product.data().stock
    }))
    return response
  }

  async createDocument(document){
    const newProduct = await this.collection.doc().create({
      title: document.title,
      description: document.description,
      code: document.code,
      thumbnail: document.thumbnail,
      price: document.price,
      stock: document.stock
    })
    return `El ${document.title} fue agregado a la base :)`
  }

  async updateDocument(id, paramsToUpdate){
    const docToUpdate = this.collection.doc(id)
    const updateDoc = await docToUpdate.update(paramsToUpdate)
    return "Documento actualizado en la base :)"
  }

  async deleteById(id){
    try {
      const docToDelete = this.collection.doc(id)
      const deleteDoc = await docToDelete.delete()
      return "Documento eliminado de la base :)"
    } catch (error) {
      console.log(error)
    }
  }
  
}

export default ContenedorFirebase;
