export const checklistReducer = (state, action) => {
  switch (action.type) {
    case "SET_CHECKLIST":
      return {
        checklist: action.payload,
      };
    case "CREATE_CHECKLIST":
      return {
        checklist: [action.payload, ...state.checklist],
      };
    case "DELETE_CHECKLIST":
      return {
        checklist: state.checklist.filter((w) => w._id !== action.payload._id),
      };
    default:
      return state;
  }
};
