import React, { createContext, useReducer, useContext } from "react";

// Setup data layer
export const StateContext = createContext();

// Data link Layer
export const StateProvider = (reducer, initalState, children) => (
  <StateContext.Provider value={useReducer(reducer, initalState)}>
    {children}
  </StateContext.Provider>
);

// use State
export const useStateValue = () => useContext(StateContext);
