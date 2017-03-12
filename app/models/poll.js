// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var pollSchema = mongoose.Schema({
        id           : String,
        title        : { type: String, required: true },
        options      : [{
          name : String,
          vote : Number
        }]
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Poll', pollSchema);
