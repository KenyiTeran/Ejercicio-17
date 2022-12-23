const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}); 

//exporta el modelo de datos de un usuario
module.exports = mongoose.model('user', userSchema);