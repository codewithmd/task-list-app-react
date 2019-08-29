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
  	e.preventDefault();
  	
  	const todoText = !this.state.todo.title ? "" : this.state.todo.title.trim();
  	console.log(todoText);
    if (todoText.length === 0) {
      e.preventDefault();
      
      alert("Give A Valid Name");
      e.target.title.focus();
      return false;
    }else {
    	this.props.onAdd(todoText);
    	
	    this.setState({
	      todo: {
	        title: ""
	      }
	    });
    }
   
    
  };
  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="title"
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
