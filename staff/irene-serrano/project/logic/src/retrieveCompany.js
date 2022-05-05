const {models :  {User}  } = require('data')
const { validators: {validateId} } = require('commons')

function retrieveCompany(userId){
    validateId(userId)

    return  User.findById(userId)
        .then(user => {
            if(user.role !==2) throw new Error('User not found')

            const doc = user._doc

            doc.id = doc._id.toString()
            delete doc._id
            delete doc.__v
            
            return doc
            })
}

module.exports = retrieveCompany