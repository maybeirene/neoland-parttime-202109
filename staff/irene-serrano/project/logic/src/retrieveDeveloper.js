const {models :  {User}  } = require('data')
const { validators: {validateId} } = require('commons')

function retrieveUser(developerId){
    validateId(developerId)

    return  User.findById(developerId).lean()
        .then(developer => {
            if (!developer) throw new NotFoundError("developer not found");

            if(developer.role !==1) throw new Error('User is not a developer')
            
            developer.id = developer._id.toString()

            delete developer._id
            delete developer.__v
            
            return developer
            })
}

module.exports = retrieveUser