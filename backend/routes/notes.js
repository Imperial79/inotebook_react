const express = require("express");
const fetchUser = require("../middleware/fetchUser");
const router = express.Router();
const Note = require("../models/Note_model");
const { body, validationResult } = require("express-validator"); //used for validation of data

// ROUTE 1: Get all notes : GET "localhost:5000/api/notes/fetchAllNotes": Login Required
router.get("/fetchAllNotes", fetchUser, async (req, res) => {
  const notes = await Note.find({ user: req.user.id });
  res.json(notes);
});

// ROUTE 2: Add new note : POST "localhost:5000/api/notes/addNote": Login Required
router.post(
  "/addNote",
  fetchUser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Enter a valid description").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;

      // If invalid input/error, return bad request
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });

      const saveNote = await note.save();

      res.json(saveNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occurred");
    }
  }
);

// ROUTE 3: update an existing note : PUT "localhost:5000/api/notes/updateNote/id": Login Required
router.put(
  "/updateNote/:id",
  fetchUser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Enter a valid description").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const { title, description, tag } = req.body;

    //create new note object
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    // Find the note to be updated and update it
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }

    //  checking if the note belongs to the user
    if (note.user.toString() !== req.user.id) {
      return res.status(401).json("Not allowed");
    }

    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );

    res.json({ note });
  }
);

// ROUTE 4: Delete an existing note : DELETE "localhost:5000/api/notes/deleteNote/id": Login Required
router.delete(
  "/deleteNote/:id",
  fetchUser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Enter a valid description").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      //  Find the note to be deleted and delete it
      let note = await Note.findById(req.params.id);
      if (!note) {
        return res.status(404).send("Not Found");
      }

      //  checking if the note belongs to the user
      if (note.user.toString() !== req.user.id) {
        return res.status(401).json("Not allowed");
      }

      //  Updating the note using note id
      note = await Note.findByIdAndDelete(req.params.id);

      //  Sending response
      res.json({ Success: "Note has been deleted", note });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;
