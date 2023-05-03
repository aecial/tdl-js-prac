import { useState } from "react";

function App() {
  // Set state for Input
  const [newItem, setNewItem] = useState("");
  // Set state for Todos
  const [todos, setTodos] = useState([]);

  // Called when checkbox is toggled
  function toggleTodo(id, completed) { // takes the parameters id, completed
    setTodos(todos => {
      return todos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed};
        }
        return todo;
      }) 

    })
  }
  function deleteTodo(id) {
    setTodos(todos => {
      return todos.filter(todo => todo.id !== id)
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodos((todos) => {
      return [
        ...todos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
    setNewItem("");
  }
 
  return (
    <>

      <form onSubmit={handleSubmit} className="new-item-form">
        <div>
          <label htmlFor="item">New Input</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h4>To Do List:</h4>
      <ul>
        {todos.length === 0 && "There are no existing To Dos"}
        {todos.map((todo) => {
          return (
            <>
              <li key={todo.id}>
              <input className="check-box" type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)} /> 
                <label className="label-checkbox">
                  {todo.title}
                </label>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}
export default App;
