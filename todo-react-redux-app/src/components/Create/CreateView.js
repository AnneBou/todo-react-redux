import React, { useState } from 'react';
import { CreateInput } from '../../utils/ui/CustomizedComponents';

const CreateView = (props) => {

  const [task, setTask] = useState();

  const onChange = (event) => {
    setTask(event.target.value);
  }

  const submit = () => {
    props.createTask(task);
  }

  return (
    <div>
      <CreateInput
        type='text'
        onChange={onChange}
        name='task'
        style={{ width: '150px' }}
      />
      <button onClick={submit}>Add</button>
    </div>
  );

}

export default CreateView;
