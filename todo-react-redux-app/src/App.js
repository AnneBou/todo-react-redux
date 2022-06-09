import React from 'react';
import './App.css';
import CreateInput from './components/Create/CreateView';
import EditButton from './components/Edit/EditView';
import DeleteButton from './components/Delete/DeleteView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-do-list</h1>
        <table>
          <thead>
            <tr>
              <th>Tasks</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><CreateInput /></td>
              <td><EditButton /> <DeleteButton /></td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
