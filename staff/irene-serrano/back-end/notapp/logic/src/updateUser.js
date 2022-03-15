const {models : { User } } = require('data')

/* import {validators} from 'commons'
const { validateEmail, validateName, validatePassword, validateId } = validators
 */
function updateUser(id, name, email, password ){
    /* validateEmail(email)
    validateName(name)
    validatePassword(password)
    validateId(id)
 */
    
    return User.updateOne({_id: id}, {name, email, password})
    .then(result => {
        
    })
}
module.exports = updateUser