const mongoose = require('mongoose')


const noteSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    name:{
        type: String,
        required: true
    }
},{
    timestamps: true
})


module.exports = mongoose.model('Notes', noteSchema)