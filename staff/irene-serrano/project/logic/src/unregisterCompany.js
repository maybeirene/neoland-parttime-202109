

const {models : { User } } = require('data')

function unregisterCompany(id, active ){

    return User.updateOne({_id: id}, {"active": active })
    .then(result => {
        const { matchedCount } = result

        if (matchedCount === 0)
            throw new Error(`company with id ${companyId} not found`)
    })
}

module.exports = unregisterCompany