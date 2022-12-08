import config from "../config.js";
import mongoose from "mongoose";

await mongoose.connect(config.mongodb.connectionString)
console.log("CONECTADO A ATLASLMONGO")

class ContenedorMongo {
    constructor(nombreCollection, schema){
        this.collection = mongoose.model(nombreCollection, schema)
    }

    async getById(id) {
        const doc = await this.collection.find( { _id: id } )
        return doc
    }

    async getAll(){
        const doc = await this.collection.find({})
        return doc
    }

    async createDocument(document){
        const doc = await this.collection.insertMany(document)
        return doc[0]._id
    }

    async updateDocument(id, paramsToUpdate){
        const doc = await this.collection.updateOne({ _id: id }, {$set: paramsToUpdate})
        return "Documento actualizado en la base :)"
    }

    async deleteById(id){
        const doc = await this.collection.deleteOne({ _id: id })
        return "Documento eliminado de la base :)"
    }

}

export default ContenedorMongo