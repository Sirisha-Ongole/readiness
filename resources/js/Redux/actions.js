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
            type: actions.Task_ERROR,
            payload: {
                msg: error.response,
                status: error.response,
            },
        });
    }
};

export const setCurrentTaskDetails = (index, tasklist) => {
    const res = {
      taskIndex : index,
      taskDetails : tasklist[index].data.attributes
    }
    store.dispatch({
      type: actions.set_current_task,
      payload: res,
    });  
  }
