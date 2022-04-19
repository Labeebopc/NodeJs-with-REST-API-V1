import { addNewContact, getContact, getContactWithID, updateContact } from "../Controllers/contactController.js";

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next()
        }, getContact)

        .post(addNewContact);

    app.route('/contact/:contactID')
        .get(getContactWithID)


        .put(updateContact)

        .delete((req, res) =>
            res.send('DELETE Request Successful'));

}

export default routes