import React from 'react';
import CreateInput from '../Create';
import EditButton from '../Edit';
import DeleteButton from '../Delete';

const ReadView = ({ values, createTask }) => {
    console.log(values);
    return (
        <div className="App">
      <header className="App-header">
        <h1>To-do-list</h1>
        <CreateInput />
        <table>
          <thead>
            <tr>
              <th>Tasks</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
                values.values.map((v) => {
                    return(
                        <tr>
                            <td>{ v }</td>
                            <td><EditButton /> <DeleteButton /></td>
                        </tr>
                    );
                })
            }
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default ReadView;