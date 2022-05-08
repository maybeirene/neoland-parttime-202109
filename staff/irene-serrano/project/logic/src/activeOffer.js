const { models: { User, Offer }} = require('data')
const { 
    validators: { validateId},
    errors: { NotFoundError, AuthError }
} = require('commons')

function activeOffer(userId, offerId ) {
    validateId(userId, 'user id')
    validateId(offerId, 'offer id')

    return Promise.all([User.findById(userId), Offer.findById(offerId)])
        .then(([user, offer]) => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)
            if (!offer) throw new NotFoundError(`offer with id ${offerId} not found`)

            if (offer.user.toString() !== userId) throw new AuthError(`offer with id ${offerId} does not belong to user with id ${userId}`)

          offer.active = true
            
            return offer.save()
        })
        .then(offer => {})
}

module.exports = activeOffer