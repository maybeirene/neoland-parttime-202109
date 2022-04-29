const { Schema } = require('mongoose')
const { type: { ObjectId } } = Schema

const user = new Schema({
    id: {
        type: ObjectId,
        required: true
    },
    role: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    stack: {
        type: String,
        required: false,
    },
    location: {
        type: String,
        required: false,
    },
    link: {
        type: String,
        required: false,
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    }

})

module.exports = user