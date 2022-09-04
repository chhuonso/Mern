import React, { useState } from 'react';
import './App.css';


function App() {
// Below Array desture syntax is equilivsnt to:
// Variable state
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

// ___________Methods_________________ 
// handles the submit button
  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    //  check if blank dont submit
    if(newTodo.length === 0){
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false
    }
  // setTodos and pass in a Brand nnew array containing all the current todos plus 1 more. 
  setTodos([...todos, todoItem])
  // in the textbox to reset
    setNewTodo("")
  }

// handles the delete button 
  const handleTodoDelete = (deleteIndex) => {
      const filteredTodos = todos.filter((todo, index) => {
        return index !== deleteIndex;
      })

    setTodos(filteredTodos);
}

// handles the checkbox
  const handleToggleComplete = (index) => {
    const updateedTodos = todos.map((todo, idx) => {
      if(index === idx) {
        todo.complete = !todo.complete;
        // REACT WAY of doing this to AVOID MUTATING the todo DIRECTLY,
        // const updatedTodo = {...todo, complete: !todo.complete};
        // return updatedTodo;
      }
      return todo;
    })

    setTodos(updateedTodos);
  }

  return (
    <>
    <div className="App">
        <form onSubmit={(event) => {
          handleNewTodoSubmit(event);
        }}>
            <input onChange={(event) => {
              setNewTodo(event.target.value);
            }}
            type="text" 
            value={newTodo} 
            />
            <button>Add</button>
        </form>

        {
          todos.map((todo, index) => {
            const todoClasses = [];
            if(todo.complete){
              todoClasses.push("line-through")
            }
            return <div key={index}>
              <span className={todoClasses.join(" ")} >{todo.text}</span>
              <input onChange={(event) => {
                handleToggleComplete(index);
              }} checked={todo.complete} type="checkbox" />
              <button onClick={(event) => {
                handleTodoDelete(index);
              }}> Delete

              </button>
            </div>
          })
        }
    </div>
    </>
  );
}

export default App;
