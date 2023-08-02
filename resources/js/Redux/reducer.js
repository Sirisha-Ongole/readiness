import * as actions from "./actionTypes";

const taskIntialState = {
    tasks: [],
    loading: true,
    error: {},
    };

const currentTaskIntialState = {
    currentTask: {},
}

    export const currentTaskReducer =  (state = currentTaskIntialState , action) => {
        const { type, payload } = action;
        
        switch (type) {
            case actions.set_current_task:
                return {...state, currentTask: payload};
            case actions.Pomo_Set:
                return {
                    ...state,
                    currentTask: payload,
                };
            case actions.Pomo_Rest:
                return {
                    ...state,
                    currentTask: payload,
                };
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
                tasks: payload,
                loading: false,
            };
            console.log(ret);
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
