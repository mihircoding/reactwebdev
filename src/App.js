import React from 'react';
import TodoList from './TodoList';

function App() {
  return (
    <>
      <TodoList />
      <input type='text'></input>
      <button>add item</button>
      <button>clear completed items</button>
      <div>0 left</div>
    </>
    
  )
}

export default App;
