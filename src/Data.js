const uuidv1 = require("uuid/v1");
const myTodos = [
  {
    id: uuidv1(),
    title: "Learn React",
    isDone: true
  },
  {
    id: uuidv1(),
    title: "Learn Node - Unit Testing",
    isDone: false
  },
  {
    id: uuidv1(),
    title: "Functional Programming JS",
    isDone: true
  },
  {
    id: uuidv1(),
    title: "Higher Order Function JS",
    isDone: true
  },
  {
    id: uuidv1(),
    title: "Algorithm",
    isDone: false
  }
];

function getTodos() {
  const todosFromLocalStorage = JSON.parse(localStorage.getItem("todos"));
  return todosFromLocalStorage || myTodos;
}
export default getTodos;
