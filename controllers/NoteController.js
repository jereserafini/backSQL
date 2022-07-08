//Import model
import NoteModel from "../models/NoteModel.js";

//Get a notes
export const getNotes = async ( req, res ) => {
    try {
        const notes = await NoteModel.findAll()
        
        res.json(notes)
        
        res.status(200)
    } catch (error) {
        res.json({ error: error.message });
    }
}

//Create de notes 
export const createNote = async ( req, res ) => {
    try {
        await NoteModel.create(req.body)
        
        res.json({'message': 'Note created'})
        
        res.status(200)
    } catch (error) {
        res.json({ error: error.message });
    }
}

//Update note
export const updateNote = async ( req, res ) => {
    try {
        await NoteModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({'message': 'Updated note'})

    } catch (error) {
        res.json({ error: error.message });
    }
}

//Delete note
export const deleteNote = async ( req, res ) => {
    try {
        await NoteModel.destroy({
            where: {id: req.params.id}
        })
        res.json({'message': 'Deleted note'})
    } catch (error) {
        res.json({ error: error.message });
    }
}
