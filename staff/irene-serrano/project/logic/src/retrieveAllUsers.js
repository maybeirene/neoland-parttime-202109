const { models: {User} } = require("data")



function retrieveAllUsers(rol){
    //TO-DO validators

    return  User.findAll(rol)
        .then(users => {
            return users.map(user => {
                const doc = user._doc

                doc.id = doc._id.toString()
                delete doc._id
                delete doc.__v
                
                return doc
                })
            })
}

module.exports = retrieveAllUsers