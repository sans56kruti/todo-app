import AppName from "./components/AppName";
import AddToDo from "./components/AddTodo";
import TodoItem1 from "./components/ToDoItem1";
import TodoItem2 from "./components/ToDoItem2";
import "./App.css";
function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddToDo />
      <div className="items-container">
        <TodoItem1 />
        <TodoItem2 />
      </div>
    </center>
  );
}

export default App;
