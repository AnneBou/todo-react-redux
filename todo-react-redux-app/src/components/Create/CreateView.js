import React, { useState } from 'react';
import { CreateInput } from '../../utils/ui/CustomizedComponents';

const CreateView = () => {

  useState = {
    task: '',
  };

  const handleChange = (event) => this.setState({ task: event.target.value });

  return (
    <div>
      <CreateInput
        type='text'
        name='task'
        onChange={ handleChange }
        style={{ width: '150px' }}
      />
    </div>
  );

}

export default CreateView;
