import express from "express";
import cors from "cors";

//Import connection db
import db from "./database/db.js";

//Import routes
import routes from "./routes/routes.js";

//Puerto
const PORT = 8080
const app = express()

//Middleware necesario para tomar datos del body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors())

//Uso de las rutas
app.use( '/notes', routes )

try {
    await db.authenticate()
    console.log('Successful connection');
} catch (error) {
    console.log(`Connection error: ${error}`);
}

//Iniciado y escuchado del server
app.listen(PORT, err => {
    try {
        console.log(`Servidor escuchando en el puerto ${PORT}`);
    } catch {
        console.log(err);
    }
})