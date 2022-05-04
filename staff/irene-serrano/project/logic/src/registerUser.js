const {models :  {User}  } = require('data')

function registerUser (role = 1, name, email, password, description, stack, location, link ){
    // TO DO validators

    return User.create({role, name, email, password, description, stack, location, link })
        .then(user => { })

}
module.exports = registerUser