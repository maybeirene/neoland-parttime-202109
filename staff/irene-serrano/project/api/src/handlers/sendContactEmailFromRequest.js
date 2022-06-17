
const { sendContactEmailFromRequest } = require('logic');
const { errors: { AuthError }} = require('commons');
const { FormatError } = require('commons/src/errors');
const { extractUserIdFromAuthorization } = require('./helpers')

module.exports = (req, res) => {
    

    try {
        const { params: { offerId, requestId } } = req
        const companyId = extractUserIdFromAuthorization(req)


        sendContactEmailFromRequest (companyId, offerId, requestId )
            .then(() => res.status(201).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

