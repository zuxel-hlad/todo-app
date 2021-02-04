import React from "react";
import "./post-add-form.css";

const PostAddForm = ({ onAdd }) => {
  return (
    <div className="bottom-panel d-flex">
      <input
        className="form-control new-post-label"
        type="text"
        placeholder="О чем вы думаете сейчас?"
      />
      <button
        type="submit"
        className="btn btn-outline-secondary"
        onClick={() => onAdd("example post")}
      >
        Добавить
      </button>
    </div>
  );
};

export default PostAddForm;
