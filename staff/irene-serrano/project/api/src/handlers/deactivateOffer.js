const { extractUserIdFromAuthorization } = require('./helpers')
const { deactivateOffer } = require('logic')

module.exports = (req, res) => {
   
    try {
        const companyId = extractUserIdFromAuthorization(req)

        const { params: { offerId }, body: { active } } = req

        deactivateOffer(companyId, offerId, active)
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}