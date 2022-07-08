//Importacion de la conexion a la base de datos
import db from "../database/db.js";

//Importado de datatypes
import { DataTypes } from "sequelize";

const NoteModel = db.define( 'notes', {
    title: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING },
    active: { type: DataTypes.BOOLEAN },
    category: { type: DataTypes.STRING },
});

export default NoteModel