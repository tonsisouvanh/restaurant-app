import { createContext, useEffect, useReducer } from "react";
import FoodReducer from "./FoodReducer";

const INITIAL_STATE = {
  foods: [],
  isLoading: false,
  isError: false
};

export const FoodContext = createContext(INITIAL_STATE);

export const FoodContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FoodReducer, INITIAL_STATE);

  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(state.currentUser));
  // }, [state.currentUser]);

  return (
    <FoodContext.Provider value={{ foods: state.foods, isLoading: state.isLoading, isError: state.isError, dispatch }}>
      {children}
    </FoodContext.Provider>
  );
};
