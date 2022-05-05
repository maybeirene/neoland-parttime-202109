require('dotenv').config()

const {
  mongoose: { connect },
} = require("data");

const express = require("express");
const cors = require("cors");

const {
  registerUser,
  registerCompany,
 /* authenticateUser,
  retrieveUser,
  retrieveCompany,
  retrieveAllUsers,
  updateUser,
  updateCompany,
  unregisterUser,
  unregisterCompany,
  createOffer,
  updateOffer,
  retrieveOffer,
  retrieveAllOffers,
  retrieveUserOffers,
  deactiveOffer,
  activeOffer,
  deleteOffer */

} = require('./handlers')

/* 
const {extractUserIdFromAuthorization } = require('./handlers/helpers')

*/

const { env: { MONGODB_URL, PORT } } = process


connect(MONGODB_URL)
.then(() => {
  console.log("connected to db");

  const api = express();

  api.use(cors());

  const router = express.Router();

  const jsonBodyParser = express.json();

  router.post("/user", jsonBodyParser, registerUser);
  router.post("/company", jsonBodyParser, registerCompany);


  api.use("/api", router);

  api.listen(PORT, () => console.log("json server running"));
});
