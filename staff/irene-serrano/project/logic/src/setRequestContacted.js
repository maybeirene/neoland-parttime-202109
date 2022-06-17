
const { models: { User, Offer } } = require('data')
const { NotFoundError, AuthError} = require('commons/src/errors')

function setRequestContacted(companyId, offerId, requestId ){
  
    return Promise.all([
        User.findById(companyId),
        Offer.findById(offerId)
    ])
    .then( res =>{
        const [company, offer] = res
        if (company.role !== 2) throw new AuthError('this user has not permission to do this')
        if (offer.company.toString() !== companyId)  throw new AuthError(`this offer does not belong to ${offer.company}`)

        const { requests } = offer
        const requestIndex =  requests.findIndex((request)=> request.id === requestId)
        
        if(requestIndex === -1 ) throw new NotFoundError(`request ${requestId} not found`)
        
        const contactedRequest = requests[requestIndex]

        contactedRequest.contacted = true
        
        return Offer.updateOne({_id: offerId},{"requests": requests})
            .then(result=>{
                const { matchedCount } = result
        
                if (matchedCount === 0)
                throw new NotFoundError(`request with id ${requestId} not found`)
        
            })
        })
        .then((offerId)=>{
            
        })
        
    }

module.exports = setRequestContacted