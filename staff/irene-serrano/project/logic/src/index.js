const registerDeveloper = require('./registerDeveloper')
const registerCompany = require('./registerCompany')
const authenticateUser = require('./authenticateUser')
const retrieveDeveloper = require('./retrieveDeveloper')
const retrieveCompany = require('./retrieveCompany')
const retrieveAllDevelopers = require('./retrieveAllDevelopers')
const updateDeveloper = require('./updateDeveloper')
const updateCompany = require('./updateCompany')
const unregisterDeveloper = require('./unregisterDeveloper')
const unregisterCompany = require('./unregisterCompany')

const createOffer = require('./createOffer')
const retrieveOffer = require('./retrieveOffer')
const retrieveAllOffers = require('./retrieveAllOffers')
const retrieveCompanyOffers = require('./retrieveCompanyOffers')
const updateOffer = require('./updateOffer')
const deactiveOffer = require('./deactiveOffer')
const activeOffer= require('./activeOffer')
const deleteOffer = require('./deleteOffer')

module.exports = {
    registerDeveloper,
    registerCompany,
    authenticateUser,
    retrieveDeveloper,
    retrieveCompany,
    retrieveAllDevelopers,
    updateDeveloper,
    updateCompany,
    unregisterDeveloper,
    unregisterCompany,

    createOffer,
    updateOffer,
    deactiveOffer,
    activeOffer,
    retrieveOffer,
    retrieveAllOffers,
    retrieveCompanyOffers,
    deleteOffer
}