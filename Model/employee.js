const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name:String,
    position:String
    
})
module.exports = mongoose.model("employee",schema);