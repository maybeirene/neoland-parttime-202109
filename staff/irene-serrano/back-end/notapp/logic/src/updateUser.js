
const {models : { User } } = require('data')

function updateUser(id, name, email, password ){
    // TODO validate id
    // TODO validate update is object
    // TODO validate each property
    
    return User.updateOne({_id: id}, {name, email, password})
    .then(result => {
        
    })
}
module.exports = updateUser