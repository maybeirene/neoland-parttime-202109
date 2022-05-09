require('dotenv').config()

const {
  mongoose: { connect },
} = require("data");

const express = require("express");
const cors = require("cors");

const {
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
  retrieveDeveloperOffers,
  deleteOffer

} = require('./handlers');


/* 
const {extractDeveloperIdFromAuthorization } = require('./handlers/helpers')

*/

const { env: { MONGODB_URL, PORT } } = process


connect(MONGODB_URL)
.then(() => {
  console.log("connected to db");

  const api = express();

  api.use(cors());

  const router = express.Router();

  const jsonBodyParser = express.json();

  router.post("/developer", jsonBodyParser, registerDeveloper);
  router.post("/company", jsonBodyParser, registerCompany);

  router.post("/developer/auth", jsonBodyParser, authenticateUser)
  router.post("/company/auth", jsonBodyParser, authenticateUser)

  router.get("/developer", jsonBodyParser, retrieveDeveloper)
  router.get("/company", jsonBodyParser, retrieveCompany)

  router.get("/developers", jsonBodyParser, retrieveAllDevelopers)
  router.get("/companies", jsonBodyParser, retrieveAllDevelopers)

  router.patch("/developer", jsonBodyParser, updateDeveloper )
  router.patch("/company", jsonBodyParser, updateCompany )

  router.patch("/developer/unregister", jsonBodyParser, unregisterDeveloper )
  router.patch("/company/unregister", jsonBodyParser, unregisterCompany )

  router.post("/offer", jsonBodyParser, createOffer);

  router.get("/offer/:offerId", jsonBodyParser, retrieveOffer)
  router.get("/offers", jsonBodyParser, retrieveAllOffers)
  router.get("/company/:companyId/offers", jsonBodyParser, retrieveDeveloperOffers)

  router.patch("/offer/:offerId", jsonBodyParser, updateOffer);
  router.patch("/offer/:offerId/deactivate", jsonBodyParser, deactiveOffer);
  router.patch("/offer/:offerId/activate", jsonBodyParser, activeOffer);
 // router.patch("/offers/:offerId/deactive", jsonBodyParser, deactiveOffer);

 router.delete("/offer/:offerId", jsonBodyParser, deleteOffer);


  api.use("/api", router);

  api.listen(PORT, () => console.log("json server running"));
});
