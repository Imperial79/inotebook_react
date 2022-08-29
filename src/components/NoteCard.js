import React from "react";

const NoteCard = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div class="card my-3">
        <div class="card-header">
          <strong>{note.title}</strong>
        </div>
        <div class="card-body">
          <p class="card-text">
            {note.description} + Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Deleniti officiis labore aspernatur temporibus
            cupiditate. Hic nobis adipisci deleniti culpa cum saepe consequuntur
            veritatis perferendis ipsum! Facilis quidem eius eligendi dicta.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
