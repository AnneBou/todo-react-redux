import { createTask } from "../../reducers/TodoReducer";
import { deleteTask } from "../../reducers/TodoReducer";
import { editTask } from "../../reducers/TodoReducer";

const createTaskAction = () => (dispatch, data) => {
  dispatch(createTask(data));
}

const deleteTaskAction = () => (dispatch, data) => {
  dispatch(deleteTask(data));
}

const editTaskAction = () => (dispatch, data) => {
  dispatch(editTask(data));
}

export { createTaskAction };
export { deleteTaskAction };
export { editTaskAction };