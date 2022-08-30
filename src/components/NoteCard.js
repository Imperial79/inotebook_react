import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";

const NoteCard = (props) => {
  const { note } = props; //renaming the props as "note" for better understanding

  const context = useContext(NoteContext);
  const { deleteNote, editNote } = context; //importing the deleteNote and editNote functions from noteContext

  //  --------------- NATIVE FUNCTIONS ------------------
  const handleDeleteClick = () => {
    deleteNote(note._id);
  };

  const handleEditClick = () => {
    editNote(note._id);
  };

  //  --------------- RETURN ------------------

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-header">
          <strong>{note.title}</strong>
        </div>
        <div className="card-body">
          <p className="card-text">{note.description}</p>
          <div className="d-flex justify-content-between">
            <i className="fa-solid fa-eraser" onClick={handleDeleteClick}></i>
            <i
              className="fa-solid fa-pen-to-square"
              onClick={handleEditClick}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
