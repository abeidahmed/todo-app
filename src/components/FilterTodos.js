import React, { Component } from "react";

import CreateTodos from "./CreateTodos";
import TodoLists from "./TodoLists";

class FilterTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoArray: [],
      selectArray: [
        { key: 0, value: "All", text: "All" },
        { key: 1, value: "Completed", text: "Completed" },
        { key: 2, value: "Pending", text: "Pending" }
      ],
      selectedValue: "All"
    };

    this.handleToggleComplete = this.handleToggleComplete.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }
  addTodo = todo => {
    this.setState({
      todoArray: [todo, ...this.state.todoArray]
    });
  };

  handleToggleComplete(id) {
    this.setState({
      todoArray: this.state.todoArray.map(item => {
        if (id === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  }

  handleSelectChange(event) {
    this.setState({
      selectedValue: event.target.value
    });
  }

  render() {
    return (
      <div>
        <CreateTodos onSubmit={this.addTodo} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20
          }}
        >
          <span style={{ marginRight: 10 }} className="is-size-5">
            Showing{" "}
            <span className="has-text-weight-semibold">
              {this.state.selectedValue}
            </span>{" "}
            Todos
          </span>
          <div className="select is-info">
            <select
              value={this.state.selectedValue}
              onChange={this.handleSelectChange}
            >
              {this.state.selectArray.map(select => (
                <option key={select.key} value={select.value}>
                  {select.text}
                </option>
              ))}
            </select>
          </div>
        </div>
        <TodoLists
          className="section"
          todoType={this.state.selectedValue}
          todoList={this.state.todoArray}
          toggleComplete={this.handleToggleComplete}
        />
      </div>
    );
  }
}

export default FilterTodos;