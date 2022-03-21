const { Note } = require('data/src/models')

function deleteNote(userId, noteId){

return Note.deleteOne({user: userId, _id: noteId})
    .then(result => {
        const { matchedCount } = result

        if (matchedCount === 0) throw new Error (`note with id ${noteId} not found at user ${userId}`)
    })
}   

module.exports = deleteNote