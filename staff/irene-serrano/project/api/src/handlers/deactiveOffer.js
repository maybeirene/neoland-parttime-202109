const { extractUserIdFromAuthorization } = require('./helpers')
const { deactiveOffer } = require('logic')

module.exports = (req, res) => {
   
    try {
        const userId = extractUserIdFromAuthorization(req)

        const { params: { offerId }, body: { active } } = req

        deactiveOffer(userId, offerId, active)
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}