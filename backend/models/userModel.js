const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true
    },
    password: {
        type: String,
        require: true,
        trim: true
    }

})

module.exports = mongoose.model('Users', userSchema);