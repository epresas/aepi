var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var addressSchema = new Schema({
 zip:Number,
 city:String,
 street_name:String
});

var Address = mongoose.model('Address', addressSchema);

module.exports = Address