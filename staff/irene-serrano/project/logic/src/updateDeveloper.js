const {models : { User } } = require('data')

function updateUser(id, name, email, password, description,  stack, location, link ){

    return User.updateOne({_id: id}, {name, email, password, description,  stack, location, link})
    .then(result => {
        const { matchedCount } = result

        if (matchedCount === 0)
            throw new Error(`developer with id ${developerId} not found`)
    })
}

module.exports = updateUser