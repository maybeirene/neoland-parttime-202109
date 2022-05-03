const {models : { User } } = require('data')

function updateCompany(id, name, email, password, description,  stack, location, link, active ){

    return User.updateOne({_id: id}, {name, email, password, description,  stack, location, link, active})
    .then(result => {
        const { matchedCount } = result

        if (matchedCount === 0)
            throw new Error(`user with id ${userId} not found`)
    })
}

module.exports = updateCompany