const { extractUserIdFromAuthorization } = require('./helpers')
const { retrieveUserOffers } = require('logic')

module.exports = (req, res) => {

    const userId = extractUserIdFromAuthorization(req)
    const { params: { ownerId }} = req

  

    if (ownerId !== userId) active = true 
    else active = null


    try {
       
        retrieveUserOffers(ownerId, active)
            .then(offers => res.json(offers))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
