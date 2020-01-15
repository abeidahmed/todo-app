import React, { Component } from "react";
import shortid from "shortid";

class CreateTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTodoSubmit = this.handleTodoSubmit.bind(this);
  }

  handleInputChange(event) {
    const userAddedInput = event.target.value;
    this.setState({
      todo: userAddedInput
    });
  }

  handleTodoSubmit(event) {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      todo: this.state.todo,
      completed: false
    });
    this.setState({
      todo: ""
    });
  }

  render() {
    return (
      <div style={{ marginTop: 50 }}>
        <form onSubmit={this.handleTodoSubmit}>
          <div className="field">
            <div className="control">
              <input
                onChange={this.handleInputChange}
                value={this.state.todo}
                type="text"
                className="input is-info"
                placeholder="Create Todo"
              />
            </div>
          </div>
          <button
            onSubmit={this.handleTodoSubmit}
            type="submit"
            className="button is-medium is-info is-fullwidth"
          >
            Create Todo
          </button>
        </form>
      </div>
    );
  }
}

export default CreateTodos;
