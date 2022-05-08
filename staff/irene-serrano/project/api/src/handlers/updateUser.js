const { extractUserIdFromAuthorization } = require('./helpers')
const { updateUser } = require('logic')

module.exports = (req, res) => {

    console.log(req.body)
    try {
        const userId = extractUserIdFromAuthorization(req)
        
        const { body: { name, email, password, description,  stack, location, link, active } } = req

        updateUser(userId, name, email, password, description,  stack, location, link, active)
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
} 