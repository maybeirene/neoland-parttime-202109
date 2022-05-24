const { models: { User, Offer }} = require('data')
const { validators: { validateId }, errors: { AuthError, NotFoundError }} = require('commons')

function deleteOffer(companyId, offerId) {
    validateId(companyId, 'company id')
    validateId(offerId, 'offer id')

    return Promise.all([User.findById(companyId), Offer.findById(offerId)])
        .then(([company, offer]) => {
            if (!company) throw new NotFoundError(`company with id ${companyId} not found`)
            if (!offer) throw new NotFoundError(`offer with id ${offerId} not found`)

            if (offer.company.toString() !== companyId) throw new AuthError(`offer with id ${offerId} does not belong to company with id ${companyId}`)  
            
            return Offer.deleteOne({ _id: offerId })
        })
        .then(() => {})
}

module.exports = deleteOffer