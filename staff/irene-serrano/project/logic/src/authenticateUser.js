const { models: { User }} = require('data')

function authenticateUser( email, password){
    // TO-DO validators

    return User.findOne({ email })
        .then( user => {
            if (!user) throw new Error ('wrong credentials')
            return user.id
        })
}
module.exports = authenticateUser