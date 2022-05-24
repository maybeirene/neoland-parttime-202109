const { extractUserIdFromAuthorization } = require('./helpers')
const { updateCompany } = require('logic')

module.exports = (req, res) => {

  
    try {
        const companyId = extractUserIdFromAuthorization(req)
        
        const { body: { name, email, password, description,  stack, location, link } } = req

        updateCompany(companyId, name, email, password, description,  stack, location, link)
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
} 