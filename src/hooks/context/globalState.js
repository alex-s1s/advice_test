import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer.js";

const initialState = {
  patients: [
    {
      id: 1,
      address: "Quadra 203 conjunto 07",
      cpf: "978.302.244.90",
      date: "2022-08-13",
      gender: "1",
      name: "Eduardo Júnior",
      price: "23",
      status: "warning",
      time: "5",
    },
    {
      id: 2,
      address: "Quadra 103 conjunto 23",
      cpf: "978.302.244.90",
      date: "2022-08-13",
      gender: "2",
      name: "Andréia Carla",
      price: "78",
      status: "info",
      time: "6",
    },
    {
      id: 3,
      address: "Quadra 207 conjunto 02",
      cpf: "978.302.244.90",
      date: "2022-08-13",
      gender: "1",
      name: "Carlos Eduardo",
      price: "35",
      status: "info",
      time: "8",
    },
  ],
};

// Create context

export const GlobalContext = createContext(initialState);

// Provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deletePatiente(id) {
    dispatch({
      type: "DELETE_PATIENTE",
      payload: id,
    });
  }

  function addPatiente(patient) {
    dispatch({
      type: "ADD_PATIENTE",
      payload: patient,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        patients: state.patients,
        deletePatiente,
        addPatiente,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
