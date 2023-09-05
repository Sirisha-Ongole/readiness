import * as actions from "./actionTypes";
import axios from "axios";
import {store, taskSelector } from "./store";

export const getTasks = () => async (dispatch) => {
    try {
        const res = await axios.get("api/tasks");
        dispatch({
            type: actions.Get_Task,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: actions.Task_Error,
            payload: {
                msg: error.response,
                status: error.response,
            },
        });
    }
};
export const addtaskDB = (taskData) => async () => {
    try {
        const res = await axios.post("api/tasks",{taskData});
        store.dispatch({
            type: actions.Add_Task_DB,
            payload: res.data,
          });
    }catch(error){
        store.dispatch({
            type: actions.DB_Task_error,
            payload: {
                status: error.response,
            },
        });
    }
}

export const addpomoDB = (pomoData) => async () => {
    try {
        const res = await axios.post("api/pomodoro",{pomoData});
        store.dispatch({
            type: actions.Add_Pomo_DB,
            payload: res.data,
        });
    } catch(error){
        store.dispatch({
            type: actions.DB_Pomo_error,
            payload: {
                status: "error",
            },
        });
    }
}

export const setCurrentTaskDetails = (index, tasklist) => {
    try{
        const res = {
            taskIndex : index,
            taskDetails : tasklist[index].data.attributes
          }
        store.dispatch({
            type: actions.set_current_task,
            payload: res,
          });  
    }catch{
        store.dispatch({
            type: actions.Task_Error,
            payload: {
                status: error.response,
            },
        });
    }
  }
