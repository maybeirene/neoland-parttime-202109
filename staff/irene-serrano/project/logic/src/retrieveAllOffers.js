const { models: { Offer } } = require('data')
const { validators: { validateId }, errors: { NotFoundError } } = require('commons')

function retrieveAllOffers (filter) {
    return  Offer.find( filter )
        .then(offers => {
          if(offers.length === 0)  throw new NotFoundError('cant find any offer')
            return offers.map(offer => {
                const doc = offer._doc

                doc.id = doc._id.toString()
                delete doc._id
                delete doc.__v
                
                return doc
                })
            })
         

}

module.exports = retrieveAllOffers