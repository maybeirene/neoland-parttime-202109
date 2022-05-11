const {models : { User } } = require('data')
const bcrypt = require('bcryptjs')

function updateCompany(id, name, email, password, description, location, link ){

    return bcrypt.hash(password, 10)
    .then(hash => User.updateOne({_id: id}, {name, email, password: hash, description,  location, link}))
    .then(result => {
        const { matchedCount } = result

        if (matchedCount === 0)
            throw new Error(`company with id ${companyId} not found`)
    })
}

module.exports = updateCompany
