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

function registerDeveloper (role = 1 , name, email, password, description, stack, location, link ){
    validateString(name, explain = 'name') 
    validateString(email, explain = 'email') 
    validatePassword(password)
    validateString(description, explain = 'description') 

  
    location? validateString(location, explain = 'location') : null
    stack? validateString(stack, explain = 'stack') : null
    link? validateString(link, explain = 'link') : null
   
    
 
    return bcrypt.hash(password, 10)
            .then(hash => User.create({  role, name, email, password: hash, description, stack, location, link  }))
            .then(developer => { })
            .catch(error => {
                if (error.message.includes('duplicate'))
                    throw new DuplicityError('developer already exists')
    
                throw error
            })

}
module.exports = registerDeveloper