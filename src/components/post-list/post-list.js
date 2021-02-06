import React from "react";
import PostListItem from "../post-list-item";
import { ListGroup } from "reactstrap";
import "./post-list.css";

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {
  const elements = posts.map((item) => {
    const { id, ...itemProps } = item; /* like,important etc.. */
    if (typeof item !== "object" || Object.keys(item).length === 0) {
      return false;
    } else {
      return (
        <li key={item.id} className="list-group-item">
          <PostListItem
            {...itemProps}
            onDelete={() => onDelete(item.id)}
            onToggleImportant={() => onToggleImportant(item.id)}
            onToggleLiked={() => onToggleLiked(item.id)}
          />
        </li>
      );
    }
  });

  return <ListGroup className="app-list list-group">{elements}</ListGroup>;
};

export default PostList;
