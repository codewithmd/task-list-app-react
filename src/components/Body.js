import React, { Component } from "react";

import TodoForm from "./TodoForm";
import TaskList from "./TaskList";
import getTodos from "../Data";
import getQuotes from "../FakeQuotes";
import Quotes from "./Quotes";

const uuidv1 = require("uuid/v1");

export default class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: getTodos()
    };
  }

  // Add To LocalStorage
  addToLocalStorage = todos => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  GetFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("todos"));
  };
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
  // Update Todo List
  handleTodoCheck = todoChecked => {
    const todos = this.state.todos;
    const updatedTodos = todos.map(todo => {
      if (todo.id === todoChecked.id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });

    this.setState(
      {
        todos: updatedTodos
      },
      () => {
        this.addToLocalStorage(updatedTodos);
      }
    );
  };

  // Delete Todo List
  handleDelete = todoClicked => {
    const todos = this.state.todos;
    const newTodos = todos.filter(todo => todo.id !== todoClicked.id);

    this.setState(
      {
        todos: newTodos
      },
      () => this.addToLocalStorage(newTodos)
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
                    <div className="card-header">Today Goals</div>
                    <div className="card-body">
                      <TodoForm onAdd={this.handleAddTodo} />
                    </div>
                  </div>
                  <div className="pt-3">
                    <Quotes getQuotes={getQuotes} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              {!this.state.todos.length && (
                <div className="alert alert-success">
                  <h4>No Goals For Today!</h4>
                  <p>Go Ahead, Add Your Today's Goal</p>
                </div>
              )}
              {this.state.todos.length > 0 && (
                <TaskList
                  todos={this.state.todos}
                  onDone={this.handleTodoCheck}
                  handleDelete={this.handleDelete}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
