import React, { useState, useContext, useEffect, useRef } from "react";
import noteContext from "../context/notes/NoteContext";
import NoteCard from "./NoteCard";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getAllNotes } = context;

  const [note, setNote] = useState({
    etitle: "",
    edescription: "",
    etag: "default",
  });

  useEffect(() => {
    getAllNotes();
    //eslint-disable-next-line
  }, []);

  const handleEditNoteClick = (currentNote) => {
    ref.current.click();

    //  setting old note values to modal fields after the edit note button is clicked
    setNote({
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const handleUpdateClick = (e) => {
    console.log("updating note", note);
    //  so that page doesnot load
    e.preventDefault();
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const ref = useRef(null);

  return (
    <div className="row my-3">
      <AddNote />
      {/* Button trigger modal  */}
      <button
        type="button"
        ref={ref}
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="container my-2">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    value={note.etitle} // initializing with old values
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    value={note.edescription} // initializing with old values
                    type="text"
                    name="edescription"
                    className="form-control"
                    id="edescription"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Tag
                  </label>
                  <input
                    value={note.etag} // initializing with old values
                    type="text"
                    name="etag"
                    className="form-control"
                    id="etag"
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleUpdateClick}
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <h3 className="my-3">Your Notes</h3>
      {notes.map((note) => {
        return (
          <NoteCard key={note._id} editNote={handleEditNoteClick} note={note} />
        );
      })}
    </div>
  );
};

export default Notes;