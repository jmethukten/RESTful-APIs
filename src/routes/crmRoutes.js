const {
  addNewContact,
  getContact,
  getContactWithID,
  updateContact,
  deleteContact,
} = require('../controllers/crmControllers');

const routes = (app) => {
  app.route('/contact').get(getContact).post(addNewContact);
  app
    .route('/contact/:contactID')
    .get(getContactWithID)
    .put(updateContact)
    .delete(deleteContact);
};

module.exports = routes;
