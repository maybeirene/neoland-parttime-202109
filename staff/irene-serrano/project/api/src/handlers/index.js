const registerUser = require('./registerUser')
const registerCompany = require('./registerCompany')
 const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const retrieveCompany = require('./retrieveCompany')
/*const updateUser = require('./updateUser')
const unregisterUser = require('./unregisterUser')

 */
module.exports = {
    registerUser,
    registerCompany,
    authenticateUser,
    retrieveUser,
    retrieveCompany,
   /* updateUser,
    unregisterUser,
 */
}