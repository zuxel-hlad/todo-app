import React from "react";
import "./app-header.css";

const AppHeader = ({ allPosts, allLiked }) => {
  return (
    <header className="app-header">
      <h1>Stanislav Shchelokov</h1>
      <h2>
        {allPosts} записей, из них понравилось {allLiked}
      </h2>
    </header>
  );
};

export default AppHeader;
