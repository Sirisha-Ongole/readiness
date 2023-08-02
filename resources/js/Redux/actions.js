import * as actions from "./actionTypes";
import axios from "axios";
import store, { taskSelector } from "./store";


export const getTasks = () => async (dispatch) => {
    try {
        const res = await axios.get("api/tasks");
        console.log(res.data);
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
