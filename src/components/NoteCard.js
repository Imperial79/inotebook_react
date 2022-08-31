import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

const NoteCard = (props) => {
  const { note, editNote } = props;

  const context = useContext(NoteContext);
  const { deleteNote } = context; //importing the deleteNote and editNote functions from noteContext

  //  --------------- NATIVE FUNCTIONS ------------------
  const handleDeleteClick = () => {
    deleteNote(note._id);
  };

  const handleEditNoteClick = () => {
    editNote(note);
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
          <span
            className="badge rounded-pill text-bg-primary"
            style={{
              marginBottom: "10px",
              fontWeight: "400",
              fontSize: "13px",
            }}
          >
            {note.tag}
          </span>
          <div className="d-flex justify-content-between">
            <i className="fa-solid fa-eraser" onClick={handleDeleteClick}></i>
            <i
              className="fa-solid fa-pen-to-square"
              onClick={handleEditNoteClick}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
