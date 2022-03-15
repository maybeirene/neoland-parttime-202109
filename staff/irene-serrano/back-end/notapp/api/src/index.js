const express = require("express");
const {
  registerUser,
  authenticateUser,
  retrieveUser,
  createNote,
  deleteNote,
  findPublicNotes,
  findNotes
} = require("logic");

const {
  mongoose: { connect },
} = require("data");
const cors = require("./cors");

connect("mongodb://localhost:27017/notapp").then(() => {
  console.log("connected to db");

  const api = express();

  api.use("*", cors);

  const router = express.Router();

  const jsonBodyParser = express.json();

  router.post("/users", jsonBodyParser, (req, res) => {
    try {
      const {
        body: { name, email, password },
      } = req;

      registerUser(name, email, password)
        .then(() => res.status(201).send())
        .catch((error) => res.status(400).json({ error: error.message }));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  router.post("/users/auth", jsonBodyParser, (req, res) => {
    console.log(req);
    try {
      const {
        body: { email, password },
      } = req;

      authenticateUser(email, password)
        .then((id) => {
          res.status(200).json({ id });
        })
        .catch((error) => res.status(400).json({ error: error.message }));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  router.get("/users", jsonBodyParser, (req, res) => {
    try {
      const {
        headers: { Authorization },
      } = req;

      const [, userId] = Authorization.split(" ");

      retrieveUser(userId)
        .then((user) => res.json(user))
        .catch((error) => res.status(400).json({ error: error.message }));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
    // TODO return user info in json format
  });

  router.patch("/users", jsonBodyParser, (req, res) => {
    try {
      const {
        headers: { Authorization },
        body: { name, email, password },
      } = req;

      const [, userId] = Authorization.split(" ");

      updateUser(userId, name, email, password)
        .then(() => res.status(204).send())
        .catch((error) => res.status(400).json({ error: error.message }));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  router.post("/notes", jsonBodyParser, (req, res) => {
    try {
      const {
        headers: { Authorization },
        body: { color, text, public },
      } = req;
      
      const [, userId] = Authorization.split(" ");

     createNote(userId, color, text, public)
        .then(() => res.status(201).send())
        .catch((error) => res.status(400).json({ error: error.message }));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  router.patch("/notes/:noteId", jsonBodyParser, (req, res) => {
    try {
      const {
        headers: { Authorization },
        params: {noteId},
        body: { color, text, public },
      } = req;

      const [, userId] = Authorization.split(" ");

      updateUser(userId, noteId , color, text, public)
        .then(() => res.status(204).send())
        .catch((error) => res.status(400).json({ error: error.message }));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  })

  router.delete('notes/:noteId', jsonBodyParser, (req, res) => {
    try{
      const {
        headers: { Authorization },
        params: {noteId}
      } = req;

      const [, userId] = Authorization.split(" ");

      deleteNote(userId, noteId)
        .then(() => res.status(204))
        .catch((error) => res.status(400).json({ error: error.message }))

    }catch(error){
      res.status(400).json({ error: error.message });
    }
  })

  router.get("/notes/public", (req, res) => {
  
    try {
      const {
        headers: { authorization },
      } = req;

      const [, userId] = authorization.split(" ");


      findPublicNotes(userId)
        .then((notes) => res.json(notes))
        .catch((error) => res.status(400).json({ error: error.message }));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  router.get("/notes", jsonBodyParser, (req, res) => {
  
    try {
      const {
        headers: { authorization },
        body: filter
      } = req;

      const [, userId] = authorization.split(" ");


      findNotes(userId, filter)
        .then((notes) => res.json(notes))
        .catch((error) => res.status(400).json({ error: error.message }));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });






  
  api.use("/api", router);

  api.listen(8080, () => console.log("json server running"));
});
