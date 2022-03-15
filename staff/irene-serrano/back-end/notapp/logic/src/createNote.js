const { models: { Note } } = require('data')
const { User } = require('data/src/models')



function createNote (userId, color, text, public){

return User.findById(userId)
    .then(user=>{
        if(!user) throw new Error (`User with id ${userId} not found`)
    
        return Note.create({ color, text, public })
    })
    .then(note => { })

}

module.exports = createNote