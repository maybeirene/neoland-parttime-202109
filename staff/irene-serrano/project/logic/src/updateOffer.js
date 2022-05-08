const { models: { User, Offer }} = require('data')
const { 
    validators: { validateId, validateString, validateBoolean },
    errors: { NotFoundError, AuthError }
} = require('commons')

function updateOffer(userId, offerId, title, description, stack, minSalary, maxSalary, location) {
    validateId(userId, 'user id')
    validateId(offerId, 'offer id')
    validateString(title, 'title')
    validateString(description, 'description')
    validateString(location, 'location')
    validateString(stack, 'stack')

    return Promise.all([User.findById(userId), Offer.findById(offerId)])
        .then(([user, offer]) => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)
            if (!offer) throw new NotFoundError(`offer with id ${offerId} not found`)

            if (offer.user.toString() !== userId) throw new AuthError(`offer with id ${offerId} does not belong to user with id ${userId}`)

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