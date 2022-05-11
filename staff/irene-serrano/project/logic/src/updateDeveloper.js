const {models : { User } } = require('data')
const bcrypt = require('bcryptjs')


function updateDeveloper(id, name, email, password, description,  stack, location, link ){

    return  bcrypt.hash(password, 10)
    .then(hash => User.updateOne({_id: id}, {name, email, password:hash, description,  stack, location, link}))
    .then(result => {
        const { matchedCount } = result

        if (matchedCount === 0)
            throw new Error(`developer with id ${developerId} not found`)
    })
}

module.exports = updateDeveloper