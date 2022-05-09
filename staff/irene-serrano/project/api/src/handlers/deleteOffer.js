const { extractUserIdFromAuthorization } = require('./helpers')
const { deleteOffer } = require('logic')

module.exports = (req, res) => {
    try {
        const userId = extractUserIdFromAuthorization(req)
        
        const { params: { offerId } } = req

        deleteOffer(userId, offerId)
            .then(() => res.status(200).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}