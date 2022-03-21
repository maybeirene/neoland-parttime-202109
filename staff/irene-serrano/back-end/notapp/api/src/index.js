require('dotenv').config()

const {
  mongoose: { connect },
} = require("data");

const express = require("express");
const cors = require("cors");

const {
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

} = require('./handlers')

/* const {


  createNote,
  updateNote,
  deleteNote,
  retrieveNote,
  retrievePublicNotesFromUser,
  //findPublicNotes,
  //findNotes
} = require("logic"); */

const {extractUserIdFromAuthorization } = require('./handlers/helpers')


const { env: { MONGODB_URL, PORT } } = process


connect(MONGODB_URL)
.then(() => {
  console.log("connected to db");

  const api = express();

  api.use(cors());

  const router = express.Router();

  const jsonBodyParser = express.json();

  router.post("/users", jsonBodyParser, registerUser);

  router.post("/users/auth", jsonBodyParser, authenticateUser);

  router.get("/users", jsonBodyParser, retrieveUser);
  
  router.patch("/users", jsonBodyParser, updateUser);

  router.delete('/users', jsonBodyParser, unregisterUser)

  router.post("/notes", jsonBodyParser, createNote)

  router.patch("/notes/:noteId", jsonBodyParser, updateUser)

  router.delete('notes/:noteId', jsonBodyParser, deleteNote)

  router.get("/notes/public", jsonBodyParser, findPublicNotes);

  router.get("/notes", jsonBodyParser, findNotes);
  
  router.get('/notes', jsonBodyParser, retrieveNote)

router.get('/users/:ownerId/notes', jsonBodyParser, retrievePublicNotesFromUser)

  api.use("/api", router);

  api.listen(PORT, () => console.log("json server running"));
});