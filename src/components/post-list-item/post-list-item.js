import React from "react";
import "./post-list-item.css";

const postlistitem = (props) => {
  const {
    label,
    onDelete,
    onToggleImportant /* function */,
    onToggleLiked /* function */,
    like /* default false */,
    important /* default false */,
  } = props;

  let classNames = "app-list-item d-flex justify-content-between ";
  if (important) {
    classNames += " important";
  }

  if (like) {
    classNames += " like";
  }
  return (
    <div className={classNames}>
      <span className="app-list-item-label" onDoubleClick={onToggleLiked}>
        {label}
      </span>
      <div className="d-flex justify-content-center align-items-center">
        <button
          className="btn-star btn-sm"
          type="button"
          onClick={onToggleImportant}>
          <i className="fa fa-star"></i>
        </button>
        <button className="btn-trash btn-sm" type="button" onClick={onDelete}>
          <i className="fa fa-trash-o"></i>
        </button>
        <i className="fa fa-heart"></i>
      </div>
    </div>
  );
};

export default postlistitem;
