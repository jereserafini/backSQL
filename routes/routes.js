import { Router } from "express";
import { 
    createNote,
    deleteNote,
    getNotes,
    updateNote } from "../controllers/NoteController.js";

const routes = Router()

//Routes
routes.get( '/', getNotes )

routes.post('/', createNote)

routes.put('/:id', updateNote)

routes.delete('/:id', deleteNote)

export default routes