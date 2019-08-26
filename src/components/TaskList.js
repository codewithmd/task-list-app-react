import React from "react";

const TaskList = props => {
  const { todos, onDone, handleDelete } = props;

  const handleRenderProgressbar = () => {
    const completed = todos.filter(todo => todo.isDone).length;
    const target = todos.length;
    return Math.ceil((completed / target) * 100);
  };

  const progress = handleRenderProgressbar();
  return (
    <div>
      <p>Your Today's Progress</p>
      <div className="progress mb-3">
        <div
          className="progress-bar progress-bar-striped bg-success"
          role="progressbar"
          style={{ width: `${progress}%` }}
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
      <div className="card tasklist-card">
        <ul className="list-group">
          {todos.map(todo => (
            <li
              key={todo.id}
              className="list-group-item d-flex justify-content-between"
            >
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  defaultChecked={todo.isDone ? "true" : ""}
                  onChange={() => onDone(todo)}
                  id={todo.id}
                  name={todo.id}
                />
                <label
                  className={`custom-control-label ${
                    todo.isDone ? "text-muted text-strike" : "font-weight-bold"
                  }`}
                  htmlFor={todo.id}
                  name={todo.id}
                >
                  {todo.title}
                </label>
              </div>
              <div>
                <span className="badge text-danger badge-pill">
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDelete(todo)}
                  >
                    <i className="fa fa-trash fa-lg" />
                  </a>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
