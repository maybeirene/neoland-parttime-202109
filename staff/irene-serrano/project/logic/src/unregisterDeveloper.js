const {models : { User } } = require('data')

function unregisterUser(id, active ){

    return User.updateOne({_id: id}, { active })
    .then(result => {
        const { matchedCount } = result

        if (matchedCount === 0)
            throw new Error(`user with id ${developerId} not found`)
    })
}

module.exports = unregisterUser