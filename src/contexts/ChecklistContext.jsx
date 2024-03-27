/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { checklistReducer } from "./reducers/checklistReducer";

export const ChecklistContext = createContext();

export const ChecklistContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(checklistReducer, {
    checklist: null,
  });

  return (
    <ChecklistContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ChecklistContext.Provider>
  );
};
