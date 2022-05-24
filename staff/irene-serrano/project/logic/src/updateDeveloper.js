const {models : { User } } = require('data')
const bcrypt = require('bcryptjs')

const {
    validators: {
        validateString,
        validatePassword
    },
    errors: {
        NotFoundError
    }
} = require('commons')

function updateDeveloper(id, name, email, password, description,  stack, location, link ){

    validateString(name, explain = 'name') 
    validateString(email, explain = 'email') 
    validatePassword(password)
    validateString(description, explain = 'description') 

  
    location? validateString(location, explain = 'location') : null
    stack? validateString(stack, explain = 'stack') : null
    link? validateString(link, explain = 'link') : null


    return  bcrypt.hash(password, 10)
    .then(hash => User.updateOne({_id: id}, {name, email, password:hash, description,  stack, location, link}))
    .then(result => {
       
        const { matchedCount } = result

        if (matchedCount === 0)
            throw new NotFoundError(`developer with id ${developerId} not found`)
    })
}

module.exports = updateDeveloper