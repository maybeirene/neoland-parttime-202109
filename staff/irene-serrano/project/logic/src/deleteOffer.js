const { models: { User, Offer }} = require('data')
const { validators: { validateId }, errors: { AuthError, NotFoundError }} = require('commons')

function deleteOffer(userId, offerId) {
    validateId(userId, 'user id')
    validateId(offerId, 'offer id')

    return Promise.all([User.findById(userId), Offer.findById(offerId)])
        .then(([user, offer]) => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)
            if (!offer) throw new NotFoundError(`offer with id ${offerId} not found`)

            if (offer.user.toString() !== userId) throw new AuthError(`offer with id ${offerId} does not belong to user with id ${userId}`)  
            
            return Offer.deleteOne({ _id: offerId })
        })
        .then(() => {})
}

module.exports = deleteOffer