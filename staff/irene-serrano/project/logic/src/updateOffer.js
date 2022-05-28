const { models: { User, Offer }} = require('data')
const { 
    validators: { validateId, validateString, validateSalary },
    errors: { NotFoundError, AuthError }
} = require('commons')
const { validateSalary } = require('commons/src/validators')

function updateOffer(companyId, offerId, title, description, stack, minSalary, maxSalary, location) {
    validateId(companyId, 'company id')
    validateId(offerId, 'offer id')
    validateString(title, 'title')
    validateString(description, 'description')
    validateString(location, 'location')
    validateString(stack, 'stack')
    validateSalary(minSalary, 'minSalary')
    validateSalary(maxSalary, 'maxSalary')

    return Promise.all([User.findById(companyId), Offer.findById(offerId)])
        .then(([company, offer]) => {
            if (!company) throw new NotFoundError(`company with id ${companyId} not found`)
            if (!offer) throw new NotFoundError(`offer with id ${offerId} not found`)

            if (offer.company.toString() !== companyId) throw new AuthError(`offer with id ${offerId} does not belong to company with id ${companyId}`)

            offer.title = title
            offer.description = description
            offer.stack = stack
            offer.minSalary = minSalary
            offer.maxSalary  = maxSalary
            offer.location = location
    
            
            return offer.save()
        })
        .then(offer => {})
}

module.exports = updateOffer