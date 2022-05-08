const { models: { User, Offer } } = require('data')
const { validators: { validateId }, errors: { NotFoundError } } = require('commons')

function retrieveOffer (userId, offerId) {
    validateId(userId, 'user id')
    validateId(offerId, 'offer id')

    return Promise.all([User.findById(userId).lean(), Offer.findById(offerId).lean().populate('user')])
        .then(([user, offer]) => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)
            if (!offer) throw new NotFoundError(`offer with id ${offerId} not found`)

            

            offer.id = offer._id.toString()

            delete offer._id
            delete offer.__v

            offer.userId = offer.user._id.toString()
            offer.companyName = offer.user.name

            delete offer.user

            return offer
        })
}

module.exports = retrieveOffer