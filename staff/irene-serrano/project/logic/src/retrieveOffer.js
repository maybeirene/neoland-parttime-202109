const { models: { User, Offer } } = require('data')
const { validators: { validateId }, errors: { NotFoundError } } = require('commons')

function retrieveOffer (companyId, offerId) {
    validateId(companyId, 'company id')
    validateId(offerId, 'offer id')

    return Promise.all([User.findById(companyId).lean(), Offer.findById(offerId).lean().populate('company')])
        .then(([company, offer]) => {
            if (!company) throw new NotFoundError(`company with id ${companyId} not found`)
            if (!offer) throw new NotFoundError(`offer with id ${offerId} not found`)

            

            offer.id = offer._id.toString()

            delete offer._id
            delete offer.__v

            offer.companyId = offer.company._id.toString()
            offer.companyName = offer.company.name

            delete offer.company

            return offer
        })
}

module.exports = retrieveOffer