const { models: { User, Offer } } = require('data')
const {
    validators: {
        validateString,
        validateSalary,
    }
} = require('commons')

function createOffer(userId, title, description, stack, minSalary, maxSalary, publicationDate = Date.now(), location) {
   /*  validateString(title)
    validateString(description)
    validateString(stack)
    validateString(location)
    validateSalary(minSalary)
    validateSalary(maxSalary) */

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)
            if (user.role !== 2)  throw new Error(`user with id ${userId} does not have permission to create an offer`)

            return Offer.create({ user: userId, title, description, stack, minSalary, maxSalary, publicationDate, location })
        })
        .then(note => { })
}

module.exports = createOffer