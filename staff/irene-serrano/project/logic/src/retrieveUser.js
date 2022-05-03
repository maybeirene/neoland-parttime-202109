const { User } = require("data/src/models")

function retrieveUser(userId){
    //TO-DO validators

    return  User.findById(userId)
        .then(user => {
            const doc = user._doc

            doc.id = doc._id.toString()
            delete doc._id
            delete doc.__v
            
            return doc
            })
}

module.exports = retrieveUser