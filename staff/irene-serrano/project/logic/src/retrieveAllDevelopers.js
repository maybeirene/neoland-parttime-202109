const { models: {User} } = require("data")
const { validators: {validateRole}, errors: {NotFoundError} } = require('commons')



function retrieveAllDevelopers(){
 
    return  User.find( {role: 1, active: true} ).lean()
        .then(developers => {
          
            if(developers.length === 0) throw new NotFoundError('cant find any developer')

            return developers.map(developer => {
            

                developer.id = developer._id.toString()
                delete developer._id
                delete developer.__v
                
                return developer
                })
            })
}

module.exports = retrieveAllDevelopers
/* 
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

module.exports = retrieveAllUsers */