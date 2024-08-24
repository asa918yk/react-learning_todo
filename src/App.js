import { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
function App() {
  const [items, setItems] = useState([]);
  function addTodo(name) {
    setItems([...items, name]);
  }
  function deleteTodo(itemIndex) {
    setItems(items.filter((item, index) => index !== itemIndex));
  }
  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
      <TodoList items={items} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
