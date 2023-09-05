import { configureStore } from '@reduxjs/toolkit'
import {currentTaskReducer, taskReducer, addToDB } from './reducer';
import { combineReducers } from 'redux'
import { useSelector } from "react-redux";

const reducer = combineReducers({
  currentTaskReducer, taskReducer, addToDB
});

export const store = configureStore({
  reducer,
  });

export const taskSelector = (state) => state.taskReducer.tasks;
  