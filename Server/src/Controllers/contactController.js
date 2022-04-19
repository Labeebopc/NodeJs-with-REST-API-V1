import mongoose from "mongoose";
import { ContactSchema } from "../Models/contactModel.js";


const Contact = mongoose.model('Contact', ContactSchema)
// POST Routes
export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body)

    newContact.save((err, Contact) => {
        if (err) {
            res.send(err)
        } else res.json(Contact);

    })
}

// GET Routes
export const getContact = (req, res) => {
    
    Contact.find({},(err, Contact) => {
        if (err) {
            res.send(err)
        } else res.json(Contact);

    })
}
