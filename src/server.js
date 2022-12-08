import express from "express";
import routes from './router/index.js'
import {} from 'dotenv/config'

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})

app.use('/api', routes )