import { createTask } from "../../reducers/TodoReducer";

const createTaskAction = () => (dispatch, data) => {
  dispatch(createTask(data));
}

export { createTaskAction };