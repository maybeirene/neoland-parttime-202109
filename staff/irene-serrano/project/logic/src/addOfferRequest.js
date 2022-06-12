const {models :  {Request, Offer, User}  } = require('data')

const {
    validators: {
        validateId
    },
    errors: {
        DuplicityError,
        NotFoundError
    }
} = require('commons')


function addOfferRequest ( offerId, developerId ){
    validateId(offerId) 
    validateId(developerId)
        
    return User.findById(developerId)
        .then(developer => {
            if (!developer) throw new NotFoundError(`offer with id ${developerId} not found`)
    
            return Offer.findById(offerId)
            .then(offer => {
                if (!offer) throw new NotFoundError(`offer with id ${offerId} not found`)
              

                if(offer.requests.some(request=> { 
                    const existingRequestDeveloperId = request.developer.toString() 
                    return existingRequestDeveloperId === developerId }))throw new DuplicityError(`user with id ${developerId} already applied to this offer`)

                const request =  Request({developer: developerId})

           
                offer.requests.push(request)

                return offer.save()

        })
      
        .then(offer => { })
    })
}

module.exports = addOfferRequest