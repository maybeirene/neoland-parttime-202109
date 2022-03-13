//TO DO: name, email, password, id/objectId, note Text, note color, note public

function validateName (name){
    if (typeof name !== 'string') throw new TypeError('Name is not string')
    if (!name.trim()) throw new Error('username is empty or blank')
}

function validateEmail (email){
    if (typeof email !== 'string') throw new TypeError('Name is not string')
    if (!email.trim()) throw new Error('username is empty or blank')
    if ()
}