const { retrieveCompany } = require('logic')
const { extractUserIdFromAuthorization } = require('./helpers')


module.exports = (req, res) => {
    try {
        const userId = extractUserIdFromAuthorization(req)

        retrieveCompany(userId)
            .then(user => res.json(user))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}