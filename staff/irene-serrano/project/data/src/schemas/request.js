const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const request = new Schema({
   
        developer: {
            type: ObjectId,
            required: true,
        },
        seen: {
            type: Boolean,
            required: true,
        },
        contacted: {
            type: Boolean,
            required: true,
        },
        rejected:{
            type: Boolean,
            required: true,
        }
    })

module.exports = request 