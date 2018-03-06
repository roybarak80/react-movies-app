var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var MessageSchema   = new Schema({
    title : String,
    message: String,
    from: String
});

module.exports = mongoose.model('Message', MessageSchema);