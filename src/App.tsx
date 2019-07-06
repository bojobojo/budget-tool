import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
interface Todo { 
  complete: boolean;
  id: number;
  userId: number;
  title: string;
}
function App() {
  const [data, setData] = useState<Todo>({ complete: true, id: 1, userId: 1, title:'empty'});
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => setData(json))
    return () => {

    };
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>

      </header>
      <h1>{data.title}</h1>
    </div>
  );
}

export default App;
