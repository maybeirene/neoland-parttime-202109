const {models :  {User}  } = require('data')
const { validators: {validateId} } = require('commons')

function retrieveUser(developerId){
    validateId(developerId)

    return  User.findById(developerId)
        .then(developer => {

            if(developer.role !==1) throw new Error('User not found')
            
            const doc = developer._doc

            doc.id = doc._id.toString()
            delete doc._id
            delete doc.__v
            
            return doc
            })
}

module.exports = retrieveUser