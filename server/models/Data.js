
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  Name: String,
  Position: String,
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
