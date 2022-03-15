const { User } = require('data/src/models')
const { Note } = require('data/src/models')

function deleteNote(userId, noteId){
// if userId === note.userId => borra note

/* return Note.findById(noteId)
    .then(note => {
    
        if(note.user === userId){
            console.log(note + ' borrada')
            return Note.deleteOne({user: userId, _id: noteId})
        } 
        else throw new Error ('Current user doesnt own this note ')
    } )
    
} */


Note.deleteOne({user: userId, _id: noteId})
    .then(result => {
        const { matchedCount } = result

        if (matchedCount === 0) throw new Error (`note with id ${noteId} not found at user ${userId}`)
    })
}   

module.exports = deleteNote