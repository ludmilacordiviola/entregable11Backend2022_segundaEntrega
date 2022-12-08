import daos from '../daos/index.js'

const prod = new daos.ProductDao()

const productControllerGet = async (req, res) => {
    try {
        if(req.params.id){
            const productsResponse = await prod.getById(req.params.id)
            res.send(productsResponse)
        } else {
            const productsResponse = await prod.getAll()
            res.send(productsResponse)
        }
    } catch (error) {
        console.log(error)
    }
}

const productControllerPost = async (req, res) => {
    try {
        const productsResponse = await prod.createDocument(req.body)
        res.send(productsResponse)
    } catch (error) {
        console.log(error)
    }
}

const productControllerPut = async (req, res) => {
    try {
        let idToUpdate = req.params.id
        let paramsToUpdate = req.body
        const productsResponse = await prod.updateDocument(idToUpdate, paramsToUpdate)
        
        res.send(productsResponse)
    } catch (error) {
        console.log(error)
    }
}

const productControllerDelete = async (req, res) => {
    try {
        let idToDelete = req.params.id
        const productsResponse = await prod.deleteById(idToDelete)

        res.send(productsResponse)
    } catch (error) {
        console.log(error)
    }
}


export { productControllerGet, productControllerPost, productControllerPut, productControllerDelete }