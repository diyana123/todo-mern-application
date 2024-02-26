export const editTask = (taskId, updatedData) => ({
    type: 'EDIT_TASK',
    payload: { taskId, updatedData },
  });
  