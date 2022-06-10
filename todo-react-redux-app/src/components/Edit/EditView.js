import React, { useState } from 'react';
import { EditButton } from '../../utils/ui/CustomizedComponents';

const EditView = (props) => {

  const [task, setTask] = useState();

  const onChange = (event) => {
    setTask(event.target.value);
  }

  const pressEdit = () => {
    props.editTask(task);
  }

  return (
    <div>
      <EditButton
        type='text'
        onChange={onChange}
        name='task'
        style={{ width: '150px' }}
        onClick ={pressEdit}
      >
        Edit
      </EditButton>
    </div>
  );

}

export default EditView;