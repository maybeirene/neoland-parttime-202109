const { models: {User} } = require("data")
const { validators: {validateRole} } = require('commons')



function retrieveAllUsers(role){
    validateRole(role)

    return  User.find( {"role" : role} ).lean()
        .then(developers => {
            return developers.map(developer => {
            

                developer.id = developer._id.toString()
                delete developer._id
                delete developer.__v
                
                return developer
                })
            })
}

module.exports = retrieveAllUsers