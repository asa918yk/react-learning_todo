import { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
function App() {
  const [items, setItems] = useState([]);
  function addTodo(name) {
    setItems([...items, name]);
  }
  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
      <TodoList items={items} />
    </div>
  );
}

export default App;
