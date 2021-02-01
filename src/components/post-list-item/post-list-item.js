import React, { Component } from "react";
import "./post-list-item.sass";

export default class postlistitem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      important: false,
      like: false,
    };
  }

  onImportant = () => {
    this.setState((state) => ({
      important: !state.important,
    }));
  };

  onLike = () => {
    this.setState((state) => ({
      like: !state.like,
    }));
  };

  render() {
    const { label,onDelete } = this.props;
    const { important } = this.state;
    const { like } = this.state;
    let classNames = "app-list-item d-flex justify-content-between";
    if (important) {
      classNames += " important";
    }
    if (like) {
      classNames += " like";
    }
    return ( 
      <div className={classNames}>
        <span onDoubleClick={this.onLike} className="app-list-item-label">
          {label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button
            className="btn-star btn-sm"
            type="button"
            onClick={this.onImportant}
          >
            <i className="fa fa-star"></i>
          </button>
          <button
            className="btn-trash btn-sm"
            type="button"
            onClick={onDelete}
          >
            <i className="fa fa-trash-o"></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </div>
    );
  }
}
