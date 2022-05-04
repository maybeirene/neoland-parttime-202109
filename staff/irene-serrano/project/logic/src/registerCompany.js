const {models :  {User}  } = require('data')

function registerCompany (role = 2, name, email, password, description, stack, location, link ){
    // TO DO validators

    return User.create({role, name, email, password, description, stack, location, link })
        .then(user => { })

}
module.exports = registerCompany