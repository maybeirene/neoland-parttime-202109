const { models: { User } } = require('data')

const {
    validators: {
        validateString,
    },
    errors: {
        NotFoundError
    }
} = require('commons')

function updateDeveloper(id, name, description, stack, location, link) {

    validateString(name, explain = 'name')
    validateString(description, explain = 'description')
    location ? validateString(location, explain = 'location') : null
    stack ? validateString(stack, explain = 'stack') : null
    link ? validateString(link, explain = 'link') : null


    return User.updateOne({ _id: id }, { name, description, stack, location, link })
        .then(result => {

            const { updatedCount } = result

            if (updatedCount === 0)
                throw new NotFoundError(`developer with id ${developerId} not found`)
        })
}

module.exports = updateDeveloper