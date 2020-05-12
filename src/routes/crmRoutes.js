import { addNewContact,
        getContacts,
        getContactWithID,
        updateContact,
        deleteContact
    } from '../controllers/crmController';

const routes =(app) => {
        app.route('/contact')
        .get((req,res, next) => {
            //middleware
            console.log(`Request from: ${req.originalURL}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getContacts)
        
        //Post endpoint
        .post(addNewContact);

    app.route('/contact/:contactID')
        .get(getContactWithID)
        //get a specific contact

        .put(updateContact)
        //updating a specific contact

        .delete(deleteContact);
        //deleting a specific contact
}

export default routes;