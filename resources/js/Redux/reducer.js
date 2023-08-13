
import * as actions from "./actionTypes";

const taskIntialState = {
    tasks: [],
    loading: true,
    error: {},
    };

const currentTaskIntialState = {
    taskDetails: {
        pomodoro_template: {},
    },
    taskIndex: null,
}

    export const currentTaskReducer =  (state = currentTaskIntialState , action) => {
        const { type, payload } = action;
        
        switch (type) {
            case actions.set_current_task:
                return {...state, taskDetails: {...payload.taskDetails, pomodoro_template:payload.taskDetails.pomodoro_template}, taskIndex: payload.taskIndex};
            case actions.Pomo_Set:
               return {...state, taskDetails: {...payload.taskDetails, pomodoro_template:payload.taskDetails.pomodoro_template}, taskIndex: payload.taskIndex};
            case actions.Pomo_Rest:
                return {...state, taskDetails: {...payload.taskDetails, pomodoro_template:payload.taskDetails.pomodoro_template}, taskIndex: payload.taskIndex};
            default:
                return state;
        }
    }


  export  const taskReducer =  (state = taskIntialState, action) => {
        const { type, payload } = action;
    
    switch (type) {
        case actions.Get_Task:
            const ret =  {
                ...state,
                tasks: payload.data,
                loading: false,
            };
            return ret;
        case actions.Task_ERROR:
            return {
                ...state,
                tasks: "No task found",
            };
        default:
            return state;
    }
}
