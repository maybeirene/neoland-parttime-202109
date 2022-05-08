const { models: { Offer } } = require('data')
//const { validators: { validateId }, errors: { NotFoundError } } = require('commons')

function retrieveUserOffers (userId, active) {
    let filter = {}

    active?  (filter = { 
        "user": userId,  
        "active": true 
    }) : ( filter = { 
        "user": userId
    })
   
    return  Offer.find( filter )
        .then(offers => {
            return offers.map(offer => {
                const doc = offer._doc

                doc.id = doc._id.toString()
                delete doc._id
                delete doc.__v
                
                return doc
                })
            })

}

module.exports = retrieveUserOffers