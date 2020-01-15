import React from "react";

//Add filterable logic (data from select box => FilterTodos)
const TodoLists = props => {
  let filteredTodo = [];
  if (props.todoType === "All") {
    filteredTodo = props.todoList;
  } else if (props.todoType === "Completed") {
    filteredTodo = props.todoList.filter(todo => todo.completed === true);
  } else {
    filteredTodo = props.todoList.filter(todo => todo.completed === false);
  }

  return (
    <div className="section">
      {filteredTodo.map(item => (
        <section className="columns ">
          <div className="column is-two-thirds">
            <label className="checkbox">
              <input
                checked={item.completed}
                onClick={() => props.toggleComplete(item.id)}
                type="checkbox"
              />
              <span
                style={{ marginLeft: 5 }}
                className={
                  item.completed
                    ? "has-text-grey-light"
                    : "has-text-black-ter"
                }
                key={item.id}
              >
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
            <button
              onClick={() => props.onDelete(item.id)}
              className="button is-small is-light"
            >
              Delete
            </button>
          </div>
        </section>
      ))}
    </div>
  );
};

export default TodoLists;
