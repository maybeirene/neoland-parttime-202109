const { retrieveAllUsers } = require('logic')

module.exports = (req, res) => {
    const {role} = req.body
    try {
       
        retrieveAllUsers(role)
            .then(users => res.json(users))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}