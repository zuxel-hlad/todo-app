import React, { Component } from "react";
import "./post-add-form.css";

export default class PostAddForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onAdd } = this.props;
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
  }
}
