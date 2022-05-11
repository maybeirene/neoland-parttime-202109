const { extractUserIdFromAuthorization } = require('./helpers')
const { unregisterDeveloper } = require('logic')

module.exports = (req, res) => {

 
    try {
        const developerId = extractUserIdFromAuthorization(req)
        
        const { body: { active = false } } = req

        unregisterDeveloper(developerId, active)
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
} 