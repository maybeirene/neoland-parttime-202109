const { models: {User} } = require("data")
const { validators: {validateRole} } = require('commons')



function retrieveAllUsers(role){
    validateRole(role)

    return  User.find( {"role" : role} )
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