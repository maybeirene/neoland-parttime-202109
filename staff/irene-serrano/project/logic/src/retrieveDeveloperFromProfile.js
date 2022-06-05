const {models :  {User}  } = require('data')
const { validators: {validateId} , errors: { NotFoundError, AuthError }} = require('commons');

function retrieveDeveloperFromProfile(developerId){
    validateId(developerId)

    return  User.findById(developerId).lean()
        .then(developer => {
            if (!developer) throw new NotFoundError("developer not found");

            if(developer.role !==1) throw new AuthError('User is not a developer')
            
            developer.id = developer._id.toString()

            delete developer._id
            delete developer.__v
            
            return developer
            })
}

module.exports = retrieveDeveloperFromProfile