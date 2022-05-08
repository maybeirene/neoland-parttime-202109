const { extractUserIdFromAuthorization } = require('./helpers')
const { activeOffer } = require('logic')

module.exports = (req, res) => {
   
    try {
        const userId = extractUserIdFromAuthorization(req)

        const { params: { offerId }, body: { active } } = req

        activeOffer(userId, offerId, active)
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}