import { addNewContact, getContact, getContactWithID, updateContact, deleteContact } from "../Controllers/contactController.js";

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next()
        }, getContact)
        // post end point
        .post(addNewContact);

    app.route('/contact/:contactID')
        // get specific contact
        .get(getContactWithID)

        .put(updateContact)

        .delete(deleteContact);

}

export default routes