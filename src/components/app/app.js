import React, { Component } from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import "./app.css";

const generateUserId = () => {
  return `s${(~~(Math.random() * 1e8)).toString(16)}`;
};
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: "Going to lear English", id: generateUserId() },
        { label: "Going to lear React", id: generateUserId() },
        { label: "This is good", id: generateUserId() },
        { label: "I need a break...", id: generateUserId() },
      ],
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const beforeClick = data.slice(0, index);
      const afterClick = data.slice(index + 1);

      const summaryClick = [...beforeClick, ...afterClick];
      return {
        data: summaryClick,
      };
    });
  };

  addItem = (body) => {
    const newItem = {
      label: body,
      important: false,
      id: generateUserId(),
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];

      return {
        data: newArr,
      };
    });
  };

  render() {
    return (
      <div className="app">
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList onDelete={this.deleteItem} posts={this.state.data} />
        <PostAddForm onAdd={this.addItem} />
      </div>
    );
  }
}
