import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import NoteCard from "./NoteCard";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;

  return (
    <div className="row my-3">
      <h3 className="my-3">Your Notes</h3>
      {notes.map((note) => {
        return <NoteCard note={note} />;
      })}
    </div>
  );
};

export default Notes;
