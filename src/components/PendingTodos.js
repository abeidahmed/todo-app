import React from "react";

const PendingTodos = props => {
  return (
    <div className="section">
      {props.todoList.map.(item => (
        <section className="columns ">
          <div className="column is-two-thirds">
            <label className="checkbox">
              <input
                onClick={() => props.toggleComplete(item.id)}
                type="checkbox"
              />
              <span style={{ marginLeft: 5 }} key={item.id}>
                {item.todo}
              </span>
            </label>
          </div>
          <div className="column has-text-right">
            <button
              style={{ marginRight: 8 }}
              className="button is-small is-link is-outlined"
            >
              Edit
            </button>
            <button className="button is-small is-light">Delete</button>
          </div>
        </section>
      ))}
    </div>
  );
};

export default PendingTodos;
