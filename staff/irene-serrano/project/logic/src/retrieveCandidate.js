const { models: { User, Offer } } = require('data')
const { validators: { validateId }, errors: { NotFoundError } } = require('commons')

function retrieveCandidate (offerId, requestId) {
    validateId(requestId, 'request id')
    validateId(offerId, 'offer id')
    let currentRequest = {}
    return Offer.findById(offerId).lean()
        .then((offer) => {
            if (!offer) throw new NotFoundError(`offer with id ${offerId} not found`)

            const { requests } = offer
            const requestIndex =  requests.findIndex((request)=> request._id.toString() === requestId)
            
            if(requestIndex === -1 ) throw new NotFoundError(`request ${requestId} not found`)

            currentRequest = requests[requestIndex]
            const developerId = currentRequest.developer.toString()

                return User.findById({_id: developerId}).lean()
                .then(dev=>{
                    if(!dev) throw new NotFoundError('cant find this user')
                    currentRequest.developerName = dev.name

                    currentRequest.id = currentRequest._id.toString()
                    currentRequest.developerId = currentRequest.developer.toString()
                   
                    delete currentRequest.developer
                    delete currentRequest._id

                    return currentRequest
                })
                

            })
        
}

module.exports = retrieveCandidate