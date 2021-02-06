import React, { Component } from "react";
import "./post-add-form.css";

export default class PostAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  onValueChange = (e) => {
    this.setState({ text: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.text);
    this.setState({
      text: "",
    });
  };

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.onSubmit} className="bottom-panel d-flex">
        <input
          className="form-control new-post-label"
          type="text"
          placeholder="О чем вы думаете сейчас?"
          onChange={this.onValueChange}
          value={text}
        />
        <button type="submit" className="btn btn-outline-secondary">
          Добавить
        </button>
      </form>
    );
  }
}
