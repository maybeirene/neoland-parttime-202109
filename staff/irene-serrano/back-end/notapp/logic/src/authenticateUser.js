const { models: { User }} = require('data')

function authenticateUser( email, password) {
    //TODO validation

    return User.findOne({ email, password })
        .then(user => {

            debugger
            if (!user) throw new Error('wrong credentials')
            else {
                return user.id
            }
            
        })
}

module.exports = authenticateUser