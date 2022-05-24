const { retrieveDeveloper } = require('logic')
const { extractUserIdFromAuthorization } = require('./helpers')


module.exports = (req, res) => {
    try {
        const developerId = extractUserIdFromAuthorization(req)

        retrieveDeveloper(developerId)
            .then(developer => res.json(developer))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}