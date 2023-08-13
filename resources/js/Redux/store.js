import { configureStore } from '@reduxjs/toolkit'
import {currentTaskReducer, taskReducer } from './reducer';
import { combineReducers } from 'redux'
import { getTasks } from './actions';



const reducer = combineReducers({
  currentTaskReducer, taskReducer
});

export const store = configureStore({
  reducer,
  });
  
store.subscribe(() => {
    console.log('Subscribe');
    console.log(taskSelector(store.getState()));
    //console.log(currentTaskPomodor(store.getState()));
      // const test = currentTaskDetails(store.getState()).taskDetails;
      // if(currentTaskDetails(store.getState()).taskDetails != undefined){
      //     console.log(test);
      // }
  });

  export const taskSelector = (state) => state.taskReducer.tasks;
  //export const startTimeSelector = (state) => state.currentTaskReducer;
  export const currentTaskDetails = (state) => {
    if(state.currentTaskReducer.currentTask != undefined){
      return state.currentTaskReducer.currentTask.taskDetails;
    }
  }
  export const currentTaskIndex = (state) => {
    if(state.currentTaskReducer.currentTask != undefined){
      return state.currentTaskReducer.currentTask.taskIndex;
    }
  }
  export const currentTaskPomodor = (state) => {
    if(state.currentTaskReducer.currentTask != undefined){
     if(state.currentTaskReducer.currentTask.taskDetails != undefined){
        return state.currentTaskReducer.currentTask.taskDetails.pomodoro_template;
     }
    }
  }

