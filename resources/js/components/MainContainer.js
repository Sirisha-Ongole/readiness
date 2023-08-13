import React from 'react';
import { AddTaskView } from './Task/AddTaskView';
import { GraphView } from './Graph/GraphView';
import { PomoView } from './Task/PomoView';

export const MainContainer = () => {
  return (
    <div className="container-fluid">
      <PomoView></PomoView>
      <AddTaskView></AddTaskView>
      <GraphView></GraphView>
    </div>  
  )
}
