import React from 'react';
import { TaskView } from './Task/TaskView';
import { GraphView } from './Graph/GraphView';
import { PomoView } from './Task/PomoView';

export const MainContainer = () => {
  return (
    <div className="container-fluid">
      <PomoView></PomoView>
      <TaskView></TaskView>
      <GraphView></GraphView>
    </div>  
  )
}
