const initialState = {
    tasks: [],
  };
  
  const jobReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'EDIT_TASK':
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task._id === action.payload.taskId ? { ...task, ...action.payload.updatedData } : task
          ),
        };
      // Add other cases for your existing actions
      default:
        return state;
    }
  };
  
  export default jobReducer;
  