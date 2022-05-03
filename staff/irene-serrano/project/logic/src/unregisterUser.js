const {models : { User } } = require('data')

function unregisterCompany(id, active ){

    return User.updateOne({_id: id}, { active })
    .then(result => {
        const { matchedCount } = result

        if (matchedCount === 0)
            throw new Error(`user with id ${userId} not found`)
    })
}

module.exports = unregisterCompany