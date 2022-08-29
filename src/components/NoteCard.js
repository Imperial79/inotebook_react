import React from "react";

const NoteCard = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-header">
          <strong>
            {note.title} - Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Praesentium,
          </strong>
        </div>
        <div className="card-body">
          <p className="card-text">
            {note.description} + Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Deleniti officiis labore aspernatur temporibus
            cupiditate. Hic nobis adipisci deleniti culpa cum saepe consequuntur
            veritatis perferendis ipsum! Facilis quidem eius eligendi dicta.
          </p>
          <div className="d-flex justify-content-between">
            <i className="fa-solid fa-eraser "></i>
            <i className="fa-solid fa-pen-to-square"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
