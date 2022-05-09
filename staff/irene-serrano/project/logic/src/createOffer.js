const { models: { User, Offer } } = require('data')
const {
    validators: {
        validateString,
        validateSalary,
    }
} = require('commons')

function createOffer(companyId, title, description, stack, minSalary, maxSalary, publicationDate = Date.now(), location) {
   /*  validateString(title)
    validateString(description)
    validateString(stack)
    validateString(location)
    validateSalary(minSalary)
    validateSalary(maxSalary) */

    return User.findById(companyId)
        .then(company => {
            if (!company) throw new Error(`company with id ${companyId} not found`)
            if (company.role !== 2)  throw new Error(`company with id ${companyId} does not have permission to create an offer`)

            return Offer.create({ company: companyId, title, description, stack, minSalary, maxSalary, publicationDate, location })
        })
        .then(note => { })
}

module.exports = createOffer