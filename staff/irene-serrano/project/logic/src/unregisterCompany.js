
const { models: { User, Offer} } = require('data')

function unregisterCompany(companyId) {

    return User.updateOne({ _id: companyId }, { active: false })
        .then(result => {
            const { modifiedCount } = result
            if (modifiedCount === 0) throw new Error(`company with id ${companyId} not found`)

            Offer.updateMany({company: companyId}, {active: false})
            .then(result => {
                const { modifiedCount } = result
                if (modifiedCount === 0) throw new Error(`Not found any offer from ${companyId}`)
                })
            })
}

module.exports = unregisterCompany