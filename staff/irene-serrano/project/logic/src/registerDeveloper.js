const {models :  {User}  } = require('data')

const {
    validators: {
        validateString,
        validatePassword
    },
    errors: {
        DuplicityError
    }
} = require('commons')
const bcrypt = require('bcryptjs')

function registerUser (role , name, email, password, description, stack, location, link ){
    validateString(name, explain = 'name') 
    validateString(email, explain = 'email') 
    validatePassword(password)
    validateString(description, explain = 'description') 
    if (location!== null){validateString(location, explain = 'location') }
    if (stack!== null){validateString(stack, explain = 'stack') }
    if (link!== null){validateString(link, explain = 'link') }
    
 
    return bcrypt.hash(password, 10)
            .then(hash => User.create({  role, name, email, password: hash, description, stack, location, link  }))
            .then(developer => { })
            .catch(error => {
                if (error.message.includes('duplicate'))
                    throw new DuplicityError('developer already exists')
    
                throw error
            })
 

   

}
module.exports = registerUser