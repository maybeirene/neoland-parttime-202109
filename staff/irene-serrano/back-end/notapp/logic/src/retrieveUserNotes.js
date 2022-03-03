const { Note } = require("data/src/models")

function retrieveUserNotes (userId){

    return  Note.find({user : userId})
    .then(notes => notes)
}
module.exports = retrieveUserNotes