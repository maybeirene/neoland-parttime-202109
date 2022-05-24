const { models: { Offer } } = require('data')
const { validators: { validateId }, errors: { NotFoundError } } = require('commons')

function retrieveCompanyOffers (companyId, active) {
    let filter = {}

    active === true?  (filter = { 
        "company": companyId,  
        "active": true 
    }) : ( filter = { 
        "company": companyId
    })
   
    return  Offer.find( filter )
        .then(offers => {
            if(offers.length === 0) throw new NotFoundError(`not found any offer from company ${companyId}`)
            
            return offers.map(offer => {
                const doc = offer._doc

                doc.id = doc._id.toString()
                delete doc._id
                delete doc.__v
                
                return doc
                })
            })

}

module.exports = retrieveCompanyOffers