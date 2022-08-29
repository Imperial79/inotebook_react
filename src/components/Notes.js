import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import NoteCard from "./NoteCard";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, addNote } = context;

  return (
    <div className="row my-3">
      <AddNote />
      <h3 className="my-3">Your Notes</h3>
      {notes.map((note) => {
        return <NoteCard key={note._id} note={note} />;
      })}
    </div>
  );
};

export default Notes;
