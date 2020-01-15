import React from "react";

import FilterTodos from "./components/FilterTodos";

const App = () => {
  return (
    <div
      style={{ marginLeft: "auto", marginRight: "auto" }}
      className="column is-half"
    >
      <h1 className="title has-text-centered">Todo App</h1>
      <FilterTodos />
    </div>
  );
};

export default App;
