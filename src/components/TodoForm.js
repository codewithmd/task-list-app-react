import React, { Component } from "react";

export default class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: {
        title: ""
      }
    };
  }

  handleUpdate = e => {
    this.setState({
      todo: {
        title: e.target.value
      }
    });
  };

  handleSubmit = e => {
    if (
      this.state.todo.title === "" ||
      this.state.todo.title === " " ||
      this.state.todo.title === "  "
    ) {
      e.preventDefault();
      alert("Give A Valid Name");
      e.target.title.focus();
      return false;
    }
    this.props.onAdd(this.state.todo);
    this.setState({
      todo: {
        title: ""
      }
    });
    e.preventDefault();
  };
  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="title"
            required
            placeholder="I Want to.."
            autoFocus
            onChange={this.handleUpdate}
            value={this.state.todo.title}
          />
        </div>
        <button type="submit" className="btn btn-success mb-2 btn-block">
          <i className="fa fa-plus-circle" /> Add
        </button>
      </form>
    );
  }
}
