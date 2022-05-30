const {models : { User } } = require('data')

function unregisterDeveloper(id ){

    return User.updateOne({_id: id}, { active: false })
    .then(result => {
        const { matchedCount } = result

        if (matchedCount === 0)
            throw new Error(`user with id ${developerId} not found`)
    })
}

module.exports = unregisterDeveloper