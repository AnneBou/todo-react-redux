import { useState } from 'react';

const DeleteView = () => {
  return (
    <>
      <div>
        <DeleteButton
          style={{ width: '150px' }}
          onClick={popupQuit.onConfirm}
        >
          {t('exercises.quit')}
        </DeleteButton>
      </div>
    </>
  );
};

export default DeleteView;
