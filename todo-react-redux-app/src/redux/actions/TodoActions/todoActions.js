import {
    createTask,
    editTask,
    deleteTask
  } from '../../reducers/TodoReducer';
  
  const createTask =
    ({ ApiCall, url }) =>
    async (dispatch, { _id, firstname, lastname }) => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        };
        const body = JSON.stringify({
          _id,
          firstname,
          lastname
        });
        const apiData = await ApiCall.put(`${url}/${_id}`, body, config);
        dispatch(updateProfile(apiData.data));
        pushNotification(dispatch, {
          msg: 'auth.user.profileUpdated',
          type: 'success'
        });
      } catch (error) {
        dispatch(authFailed());
        pushNotification(dispatch, {
          msg: 'auth.error.serverError',
          type: 'error'
        });
      }
    };
  
  const editTask =
    ({ ApiCall, url }) =>
    async (dispatch, _id, file) => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        };
  
        const newFormData = new FormData();
        newFormData.append('file', file);
  
        const apiData = await ApiCall.patch(
          `${url}/avatar/${_id}`,
          newFormData,
          config
        );
        dispatch(updateProfile(apiData.data));
        pushNotification(dispatch, {
          msg: 'auth.user.avatarUpdated',
          type: 'success'
        });
      } catch (error) {
        pushNotification(dispatch, {
          msg: 'auth.error.serverError',
          type: 'error'
        });
      }
    };

    const deleteTask =
    ({ ApiCall, url }) =>
    async (dispatch, _id, file) => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        };
  
        const newFormData = new FormData();
        newFormData.append('file', file);
  
        const apiData = await ApiCall.patch(
          `${url}/avatar/${_id}`,
          newFormData,
          config
        );
        dispatch(updateProfile(apiData.data));
        pushNotification(dispatch, {
          msg: 'auth.user.avatarUpdated',
          type: 'success'
        });
      } catch (error) {
        pushNotification(dispatch, {
          msg: 'auth.error.serverError',
          type: 'error'
        });
      }
    };

  export {
    createTask,
    editTask,
    deleteTask
  };
  