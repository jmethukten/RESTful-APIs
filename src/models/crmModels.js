const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: 'Enter first name',
  },
  lastName: {
    type: String,
    required: 'Enter last name',
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
  company: {
    type: String,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Contact', contactSchema);
