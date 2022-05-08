const { extractUserIdFromAuthorization } = require('./helpers')
const { createOffer } = require('logic')

module.exports = (req, res) => {
    try {
        const userId = extractUserIdFromAuthorization(req)

        const { body: { title, description, stack, minSalary, maxSalary, publicationDate, location } } = req

        createOffer(userId, title, description, stack, minSalary, maxSalary, publicationDate, location)
            .then(() => res.status(201).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}