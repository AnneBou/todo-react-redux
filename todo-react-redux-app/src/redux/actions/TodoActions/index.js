import { createTaskAction } from "./todoActions";
import { deleteTaskAction } from "./todoActions";
import { editTaskAction } from "./todoActions";

const createTask = createTaskAction();
const deleteTask = deleteTaskAction();
const editTask = editTaskAction();

console.log(createTask);
console.log(deleteTask);
console.log(editTask);

export { createTask };
export { deleteTask };
export { editTask };