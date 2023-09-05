
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

const newPomp = {
    new_task_id : null,
    new_pmodoro_id : null,
    status: null,
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
            return {
                ...state,
                tasks: payload.data,
                loading: false,
            };
        case actions.Task_Error:
            return {
                ...state,
                tasks: "No task found",
            };
        default:
            return state;
    }
}

export  const addToDB =  (state = newPomp, action) => {
    const { type, payload } = action;
switch (type) {
    case actions.Add_Task_DB:
        return {
            ...state,
            new_task_id : payload.data.attributes.task_id, status: "success"
        };
        case actions.Add_Pomo_DB:
        return {
                ...state,
                new_pmodoro_id: payload.data.attributes.pmodoro_id, status: "success"
            };
        case actions.DB_Task_error :
                return {
                    ...state,
                    status: "error"
                }
                case actions.DB_Pomo_error:
                    return {
                        ...state,
                        status: "error"
                    }
                case actions.DB_TaskandPomo_reset:
                        return {
                            ...state,
                                new_task_id : null,
                                new_pmodoro_id : null,
                                status: null
                            
                        }
                default:
                    return state;
}
}
