import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  //  Get all notes
  const getAllNotes = async () => {
    //  API call
    const response = await fetch(`${host}/api/notes/fetchAllNotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMwOGM2ZTEzMDFjYTI1NDQ5MDU5NjhiIn0sImlhdCI6MTY2MTg0NDc1OX0.v3RIZvbLVvi5XDTS0RMdyA6g7vj2NXkSK57HIvbfNC8",
      },
    });
    const json = await response.json();
    // console.log(json);

    // setting fetched notes from server
    setNotes(json);
  };

  //  Add a note
  const addNote = async (title, description, tag) => {
    //  API call
    const response = await fetch(`${host}/api/notes/addNote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMwOGM2ZTEzMDFjYTI1NDQ5MDU5NjhiIn0sImlhdCI6MTY2MTU4MzYyNX0.kJJ1ZpQXsNjFMHf_LFe1va3zrbKQX24bgmh57BOdQHY",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const note = {
      _id: Date.now(),
      user: "6308c6e1301ca2544905968b",
      title: title,
      description: description,
      tag: tag,
      date: Date.now(),
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //  Delete a note
  const deleteNote = async (id) => {
    //  API call
    const response = await fetch(`${host}/api/notes/deleteNote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMwOGM2ZTEzMDFjYTI1NDQ5MDU5NjhiIn0sImlhdCI6MTY2MTU4MzYyNX0.kJJ1ZpQXsNjFMHf_LFe1va3zrbKQX24bgmh57BOdQHY",
      },
    });
    console.log(response.json());
    // getAllNotes();
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //  Edit a note
  const editNote = async (id, title, description, tag) => {
    //  API call
    const response = await fetch(`${host}/api/notes/updateNote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMwOGM2ZTEzMDFjYTI1NDQ5MDU5NjhiIn0sImlhdCI6MTY2MTU4MzYyNX0.kJJ1ZpQXsNjFMHf_LFe1va3zrbKQX24bgmh57BOdQHY",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    //Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getAllNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
