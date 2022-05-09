const { models: {User} } = require("data")
const { validators: {validateRole} } = require('commons')



function retrieveAllUsers(role){
    validateRole(role)

    return  User.find( {"role" : role} )
        .then(developers => {
            return developers.map(developer => {
                const doc = developer._doc

                doc.id = doc._id.toString()
                delete doc._id
                delete doc.__v
                
                return doc
                })
            })
}

module.exports = retrieveAllUsers