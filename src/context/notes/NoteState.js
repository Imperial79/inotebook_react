import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "630a2880675137cf2ac8adbd5",
      user: "6308c6e1301ca2544905968b",
      title: "having fun",
      description: "yo yo",
      tag: "Fun",
      date: "2022-08-27T14:21:52.663Z",
      __v: 0,
    },
    {
      _id: "630a288a1675137cf2c8adbd7",
      user: "6308c6e1301ca2544905968b",
      title: "having fun",
      description: "yo yo",
      tag: "Fun",
      date: "2022-08-27T14:21:53.057Z",
      __v: 0,
    },
    {
      _id: "630a2881675137caf2c8adbd9",
      user: "6308c6e1301ca2544905968b",
      title: "having fun",
      description: "yo yo",
      tag: "Fun",
      date: "2022-08-27T14:21:53.183Z",
      __v: 0,
    },
    {
      _id: "630a288167513a7cf2c8adbd9",
      user: "6308c6e1301ca2544905968b",
      title: "having fun",
      description: "yo yo",
      tag: "Fun",
      date: "2022-08-27T14:21:53.183Z",
      __v: 0,
    },
    {
      _id: "630a28816a75137cf2c8adbd9",
      user: "6308c6e1301ca2544905968b",
      title: "having fun",
      description: "yo yo",
      tag: "Fun",
      date: "2022-08-27T14:21:53.183Z",
      __v: 0,
    },
    {
      _id: "630a2881675137cf2ca8adbd9",
      user: "6308c6e1301ca2544905968b",
      title: "having fun",
      description: "yo yo",
      tag: "Fun",
      date: "2022-08-27T14:21:53.183Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  //  Add a note
  const addNote = (title, description, tag) => {
    //  TODO: API call
    console.log("Adding a new note (from NoteState.js)");
    const note = {
      _id: "630a2881675137cf2c8adbd9",
      user: "6308c6e1301ca2544905968b",
      title: title,
      description: description,
      tag: tag,
      date: "2022-08-27T14:21:53.183Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //  Delete a note
  const deleteNote = (id) => {};

  //  Edit a note
  const editNote = (id) => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
