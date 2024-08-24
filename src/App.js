import { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
function App() {
  const [items, setItems] = useState([]);
  function addTodo(name) {
    setItems([...items, {
      name: name,
      isComplete: false
    }]);
  }
  function deleteTodo(itemIndex) {
    setItems(items.filter((item, index) => index !== itemIndex));
  }
  function completeTodo(itemIndex,isComplete) {
    setItems(
      items.map((item, index) => (index === itemIndex ? {name: item.name, isComplete: isComplete} : item))
    );
  }
  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
      <TodoList items={items} deleteTodo={deleteTodo} completeTodo={completeTodo} />
    </div>
  );
}

export default App;
