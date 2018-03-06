var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CarSchema   = new Schema({

    id: String,
    brand: String,
    model: String,
    year: String,
    image: String,
    description: String
   
});

module.exports = mongoose.model('Car', CarSchema);