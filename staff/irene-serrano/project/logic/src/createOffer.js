const { models: { User, Offer } } = require('data')
const {
    validators: {
        validateString,
        validateSalary,
    }
} = require('commons')

function createOffer(companyId, title, description, stack, minSalary, maxSalary, location, publicationDate = Date.now()) {

    validateString(title, 'title')
    validateString(description, 'description')
    validateString(stack, 'stack')
    if(location) validateString(location, 'location')
    validateSalary(minSalary, 'minSalary')
    validateSalary(maxSalary, 'maxSalary')


    return User.findById(companyId)
        .then(company => {
            if (!company) throw new Error(`company with id ${companyId} not found`)
            if (company.role !== 2) throw new Error(`company with id ${companyId} does not have permission to create an offer`)

            return Offer.create({ company: companyId, title, description, stack, minSalary, maxSalary, publicationDate, location })
        })
        .then(offer => { })
}

module.exports = createOffer