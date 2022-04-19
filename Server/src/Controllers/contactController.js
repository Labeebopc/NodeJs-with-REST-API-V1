import { Router } from "express";
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

    Contact.find({}, (err, Contact) => {
        if (err) {
            res.send(err)
        } else res.json(Contact);

    })
}

// GET element by ID
export const getContactWithID = (req, res) => {

    Contact.findById(req.params.contactID, (err, Contact) => {
        // contactID same as route('/contct:contctID') in contactRoute
        if (err) {
            res.send(err)
        } else res.json(Contact);

    })
}

// PUT/UPDATE Routes
export const updateContact = (req, res) => {

    Contact.findOneAndUpdate({ _id: req.params.contactID }, req.body, { new: true, useFindAndModify: false }, (err, Contact) => {
        if (err) {
            res.send(err)
        } else res.json(Contact);

    })
}

// DELETE Routes
export const deleteContact = (req, res) => {

    Contact.remove({ _id: req.params.contactID }, (err, Contact) => {
        if (err) {
            res.send(err)
        } else res.json({ message: 'Contact Successfuly Deleted' });

    })
}