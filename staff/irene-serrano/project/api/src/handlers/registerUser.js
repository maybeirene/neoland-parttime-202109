const { registerUser } = require('logic')
const { errors: { DuplicityError, FormatError } } = require('commons')

module.exports = (req, res) => {
    try{
        const {body: {role, name, email, password, description, stack, location, link} } = req

        registerUser(role, name, email, password, description, stack, location, link )
        .then(()=> res.status(201).send())
        .catch(error => {
            let status = 500

                if (error instanceof DuplicityError)
                    status = 409

                res.status(status).json({ error: error.message })
        })
    } 
    catch (error){
        let status = 500

                if (error instanceof DuplicityError)
                    status = 409

                res.status(status).json({ error: error.message })
    }
}