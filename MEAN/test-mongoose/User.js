// Schema mongoose
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var Schema = mongoose.Schema;

var usersSchema = new Schema({
 name: {type: String, required: true, unique: true },
 surname:String,
 email:String,
 password:String,
 age: Number,
 address:{type: mongoose.Schema.Types.ObjectId, ref: 'Address'},

});
usersSchema.plugin(mongoosePaginate);

usersSchema.virtual('fullName').get(function () {
    return this.name + ' ' + this.surname;
  });

usersSchema.statics.findByName = function (name, cb) {
    this.find({ 
        name:name
    }, cb);
}

usersSchema.methods.sayHi = function () {
    let hi = this.name + " say hi";
    return hi;
  }

var User = mongoose.model('User', usersSchema);

module.exports = User