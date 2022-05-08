require('dotenv').config()

const {
  mongoose: { connect },
} = require("data");

const express = require("express");
const cors = require("cors");

const {
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
  /*retrieveAllOffers,
  retrieveUserOffers,
  

  deleteOffer */

} = require('./handlers');


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

  router.post("/users", jsonBodyParser, registerUser);
  router.post("/company", jsonBodyParser, registerCompany);

  router.post("/users/auth", jsonBodyParser, authenticateUser)
  router.post("/company/auth", jsonBodyParser, authenticateUser)

  router.get("/user", jsonBodyParser, retrieveUser)
  router.get("/company", jsonBodyParser, retrieveCompany)

  router.get("/users", jsonBodyParser, retrieveAllUsers)
  router.get("/companies", jsonBodyParser, retrieveAllUsers)

  router.patch("/users", jsonBodyParser, updateUser )
  router.patch("/companies", jsonBodyParser, updateCompany )

  router.patch("/users/unregister", jsonBodyParser, unregisterUser )
  router.patch("/companies/unregister", jsonBodyParser, unregisterCompany )

  router.post("/offer", jsonBodyParser, createOffer);

  router.get("/offers/:offerId", jsonBodyParser, retrieveOffer)

  router.patch("/offers/:offerId", jsonBodyParser, updateOffer);
  router.patch("/offers/deactive/:offerId", jsonBodyParser, deactiveOffer);
  router.patch("/offers/active/:offerId", jsonBodyParser, activeOffer);
 // router.patch("/offers/:offerId/deactive", jsonBodyParser, deactiveOffer);



  api.use("/api", router);

  api.listen(PORT, () => console.log("json server running"));
});
