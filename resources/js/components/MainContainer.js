import React from 'react';
import { AddTaskView } from './Task/AddTaskView';
import { GraphView } from './Graph/GraphView';
import { PomoTimer } from './Task/PomoTimer';

export const MainContainer = () => {
  return (
    <div class="container-fluid">
      <PomoTimer></PomoTimer>
      <AddTaskView></AddTaskView>
      <GraphView></GraphView>
    </div>  
  )
}
