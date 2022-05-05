const {models :  {User}  } = require('data')
const { validators: {validateId} } = require('commons')

function retrieveUser(userId){
    validateId(userId)

    return  User.findById(userId)
        .then(user => {

            if(user.role !==1) throw new Error('User not found')
            
            const doc = user._doc

            doc.id = doc._id.toString()
            delete doc._id
            delete doc.__v
            
            return doc
            })
}

module.exports = retrieveUser