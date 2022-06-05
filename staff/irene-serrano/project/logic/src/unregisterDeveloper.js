const {models : { User } } = require('data')

function unregisterDeveloper(developerId){

    return User.updateOne({_id: developerId}, { active: false })
    .then(result => {
        const { modifiedCount } = result

        if (modifiedCount === 0)
            throw new Error(`user with id ${developerId} not found`)
    })
}

module.exports = unregisterDeveloper