import { useState, useReducer } from "react";
import { createContainer } from 'unstated-next';
import AppReducer from "./AppReducer";

export const useStore = () => {
const initialState = {
    employees: [
      {
        id: 1,
        name: "Ishan Manandhar",
        location: "Kathmandu",
        designation: "Frontend Developer"
      }
    ]
  };

const [state, dispatch] = useReducer(AppReducer, initialState);

const removeEmployee = (id) => {
    dispatch({
      type: "REMOVE_EMPLOYEE",
      payload: id
    });
  }

  const  addEmployee = (employees) => {
    dispatch({
      type: "ADD_EMPLOYEES",
      payload: employees
    });
  }

  const editEmployee = (employees) =>{
    dispatch({
      type: "EDIT_EMPLOYEE",
      payload: employees
    });
  }

  return {
    employees: state.employees, 
    addEmployee,
    removeEmployee,
    editEmployee
  };
}

export const StoreContainer = createContainer(useStore);