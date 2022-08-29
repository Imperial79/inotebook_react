import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const s1 = {
    name: "Avishek",
    roll: 50,
  };

  const [state, setState] = useState(s1);
  const notesInitial = [
    {
      _id: "630a2880675137cf2c8adbd5",
      user: "6308c6e1301ca2544905968b",
      title: "having fun",
      description: "yo yo",
      tag: "Fun",
      date: "2022-08-27T14:21:52.663Z",
      __v: 0,
    },
    {
      _id: "630a2881675137cf2c8adbd7",
      user: "6308c6e1301ca2544905968b",
      title: "having fun",
      description: "yo yo",
      tag: "Fun",
      date: "2022-08-27T14:21:53.057Z",
      __v: 0,
    },
    {
      _id: "630a2881675137cf2c8adbd9",
      user: "6308c6e1301ca2544905968b",
      title: "having fun",
      description: "yo yo",
      tag: "Fun",
      date: "2022-08-27T14:21:53.183Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
