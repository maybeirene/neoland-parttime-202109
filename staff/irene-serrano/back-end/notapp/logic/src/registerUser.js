const {models : { User } } = require('data')
/* import {validators} from 'commons'
const {validateEmail, validateName, validatePassword} = validators
 */

function registerUser (name, email, password){
    
    /* validateName(name)
    validateEmail(email)
    validatePassword(password)
 */
    /* Antes utilizabamos este codigo:

    const user = new User({ name, email, password })

    return user.save()
        .then(user => { })

    Ahora podemos utilizar un atajo:
    */
   return User.create({name, email, password})
    .then(user => { })

}

module.exports = registerUser