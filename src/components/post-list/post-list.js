import React from "react";
import PostListItem from "../post-list-item";
import { ListGroup } from "reactstrap";
import "./post-list.css";

const PostList = ({ posts,onDelete }) => {
  const elements = posts.map((item) => {
    if (typeof item !== "object" || Object.keys(item).length === 0) {
      return false;
    } else {
      return (
        <li key={item.id} className="list-group-item">
          <PostListItem label={item.label} onDelete={()=>onDelete(item.id)}/>
        </li>
      );
    }
  });

  return <ListGroup className="app-list list-group">{elements}</ListGroup>;
};

export default PostList;
