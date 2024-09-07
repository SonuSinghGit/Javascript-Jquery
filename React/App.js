// App.js
import React from 'react';
import ParentComponent from './parentComponent';

function App() {
  return (
    <div>
      <h1>React App</h1>
      <ParentComponent>
        <p>This is a child component.</p>
        <button>Click me</button>
      </ParentComponent>
    </div>
  );
};

export default App;