import { useState } from 'react';
import { CreateInput } from '../../utils/ui/CustomizedComponents';

const CreateView = () => {
  return (
    <div>
      <CreateInput
        style={{ width: '150px' }}
      >
        My task
      </CreateInput>
    </div>
  );
};

export default CreateView;
