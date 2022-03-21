const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const  unregisterUser = require('./unregisterUser')

const createNote = require('./createNote')
const updateNote = require('./updateNote')
const retrieveNote = require('./retrieveNote')
const findNotes = require('./findNotes')
const findPublicNotes = require('./findPublicNotes')

const retrievePublicNotesFromUser = require('./retrievePublicNotesFromUser')
const deleteNote = require('./deleteNote')

module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    unregisterUser,
    createNote,
    updateNote,
    retrieveNote,
    findNotes,
    findPublicNotes,
    retrievePublicNotesFromUser,
    deleteNote


}

