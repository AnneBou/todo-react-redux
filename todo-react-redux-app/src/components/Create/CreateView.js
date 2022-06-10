import React, { useState } from 'react';
import { CreateInput, SubmitButton } from '../../utils/ui/CustomizedComponents';

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
        placeholder='Add a task here'
        style={{ width: '150px' }}
      />
      <SubmitButton onClick={submit}>Add</SubmitButton>
    </div>
  );

}

export default CreateView;
