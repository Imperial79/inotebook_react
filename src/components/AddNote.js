import React, { useContext, useState } from "react";
import noteContext from "../context/notes/NoteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "default",
  });

  const handleAddClick = (e) => {
    //  so that page doesnot load
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="card border-0"
      style={{ padding: "40px 40px", backgroundColor: "#f7f7f7" }}
    >
      <h1>+ Add a Note</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            value={note.title}
            className="form-control"
            id="title"
            name="title"
            required={true}
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            value={note.description}
            name="description"
            className="form-control"
            id="description"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Tag
          </label>
          <input
            type="text"
            value={note.tag}
            name="tag"
            className="form-control"
            id="tag"
            onChange={onChange}
          />
        </div>
        <button
          type="submit"
          disabled={note.title.length < 5 || note.description.length < 5}
          className="btn btn-primary"
          onClick={handleAddClick}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddNote;
