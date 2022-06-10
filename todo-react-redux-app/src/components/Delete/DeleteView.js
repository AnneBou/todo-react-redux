import React, { useState } from 'react';
import { DeleteButton } from '../../utils/ui/CustomizedComponents';

const DeleteView = (props) => {

  const [task, setTask] = useState();

  const onChange = (event) => {
    setTask(event.target.value);
  }

  const pressDelete = () => {
    props.deleteTask(task);
  }

  return (
    <div>
      <DeleteButton
        type='text'
        onChange={onChange}
        name='task'
        style={{ width: '150px' }}
        onClick={pressDelete}
      >
      Delete
      </DeleteButton>
    </div>
  );

}

export default DeleteView;