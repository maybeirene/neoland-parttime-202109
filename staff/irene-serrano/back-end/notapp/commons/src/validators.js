//TO DO: name, email, password, id/objectId, note Text, note color, note public
const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

function validateName (name){
    if (typeof name !== 'string') throw new TypeError('Name is not string')
    if (!name.trim()) throw new Error('username is empty or blank')
}

function validateEmail (email){
    if (typeof email !== 'string') throw new TypeError('Name is not string')
    if (!email.trim()) throw new Error('username is empty or blank')
    if (EMAIL_REGEX.test(email) )throw new Error('invalid email')
}

function validatePassword(password) {
    if (typeof password !== 'string') throw new TypeError('password is not string')
    if (!password.trim()) throw new Error('password is empty or blank')
    if (password.trim().length < 8) throw new Error('password length is smaller than 8 characters')
}

function validateId(id) {
    if (typeof id !== 'string') throw new TypeError('id is not string')
    if (!id.trim()) throw new Error('id is empty or blank')
}


module.exports = {
    validateEmail, validateName, validatePassword, validateId
}