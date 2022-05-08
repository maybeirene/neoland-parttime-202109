const { extractUserIdFromAuthorization } = require('./helpers')
const { unregisterUser } = require('logic')

module.exports = (req, res) => {

 
    try {
        const userId = extractUserIdFromAuthorization(req)
        
        const { body: { active } } = req

        unregisterUser(userId, active)
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
} 