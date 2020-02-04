// eslint-disable-next-line import/prefer-default-export
export const getTasksUndone = (tasks) => {
  return tasks.filter((task) => !task.done);
};
