const registerUser = require('./registerUser')
const registerCompany = require('./registerCompany')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const retrieveCompany = require('./retrieveCompany')
const retrieveAllUsers = require('./retrieveAllUsers')
const updateUser = require('./updateUser')
const updateCompany = require('./updateCompany')
const unregisterUser = require('./unregisterUser')
const unregisterCompany = require('./unregisterCompany')

const createOffer = require('./createOffer')
const retrieveOffer = require('./retrieveOffer')
const retrieveAllOffers = require('./retrieveAllOffers')
const retrieveUserOffers = require('./retrieveUserOffers')
const updateOffer = require('./updateOffer')
const deactiveOffer = require('./deactiveOffer')
const activeOffer= require('./activeOffer')
const deleteOffer = require('./deleteOffer')

module.exports = {
    registerUser,
    registerCompany,
    authenticateUser,
    retrieveUser,
    retrieveCompany,
    retrieveAllUsers,
    updateUser,
    updateCompany,
    unregisterUser,
    unregisterCompany,

    createOffer,
    updateOffer,
    deactiveOffer,
    activeOffer,
    retrieveOffer,
    retrieveAllOffers,
    retrieveUserOffers,
    deleteOffer
}