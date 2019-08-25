import React, { Component } from "react";

import TodoForm from "./TodoForm";
import getTodos from "../Data";

const uuidv1 = require("uuid/v1");

export default class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: getTodos()
    };
  }

  // Add new Todo
  handleAddTodo = todo => {
    const { todos } = this.state;
    const newTodo = Object.assign(
      {},
      {
        id: uuidv1(),
        isDone: false
      },
      todo
    );
    todos.push(newTodo);

    this.setState(
      {
        todos
      },
      () => this.addToLocalStorage(todos)
    );
  };

  render() {
    return (
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-6 text-center ">
              <div className="row">
                <div className="col-md-10">
                  <div className="card ">
                    <div className="card-header">Today Tasks</div>
                    <div className="card-body">
                      <TodoForm onAdd={this.handleAddTodo} />
                    </div>
                  </div>
                  <div className="pt-3">
                    <p>Quotes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <p>List tasks</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
