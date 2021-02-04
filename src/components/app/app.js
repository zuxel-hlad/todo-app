import React, { Component } from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import "./app.css";

/* generate id for users */
const generateUserId = () => {
  return `s${(~~(Math.random() * 1e8)).toString(16)}`;
};
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          label: "Going to lear English",
          important: false,
          like: false,
          id: generateUserId(),
        },
        {
          label: "Going to lear React",
          important: false,
          like: false,
          id: generateUserId(),
        },
        {
          label: "This is good",
          important: false,
          like: false,
          id: generateUserId(),
        },
        {
          label: "I need a break...",
          important: false,
          like: false,
          id: generateUserId(),
        },
      ],
    };
  }

  /* delete posts on btn click */
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

  /* add posts on btn click */
  addItem = (body) => {
    const newItem = {
      label: body,
      important: false,
      like: false,
      id: generateUserId(),
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];

      return {
        data: newArr,
      };
    });
  };

  /* enable / disable star important */
  onToggleImportant = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const old = data[index];
      const toggledItem = { ...old, important: !old.important };

      const dataBeforeImportant = data.slice(0, index);
      const dataAfterImportant = data.slice(index + 1);
      const likeOrNotImportant = [
        ...dataBeforeImportant,
        toggledItem,
        ...dataAfterImportant,
      ];
      return {
        data: likeOrNotImportant,
      };
    });
  };

  /* enable / disable like to posts */
  onToggleLiked = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const old = data[index];
      const toggledItem = { ...old, like: !old.like };

      const dataBeforeLike = data.slice(0, index);
      const dataAfterLike = data.slice(index + 1);
      const likeOrNotLike = [...dataBeforeLike, toggledItem, ...dataAfterLike];
      return {
        data: likeOrNotLike,
      };
    });
  };

  render() {
    const { data } = this.state;

    /* add like count and posts count to header */
    const LikedPosts = data.filter((item) => item.like).length;
    const totalPosts = data.length;

    return (
      <div className="app">
        <AppHeader allPosts={totalPosts} allLiked={LikedPosts} />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList
          posts={data}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
        />
        <PostAddForm onAdd={this.addItem} />
      </div>
    );
  }
}
