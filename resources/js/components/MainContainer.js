import React from 'react';
import { TasksView } from './Task/TasksView';
import { GraphView } from './Graph/GraphView';
import { PomoTimer } from './Task/PomoTimer';

export const MainContainer = () => {
  return (
    <div class="container-fluid">
        <PomoTimer/>
        <TasksView/>
        <GraphView/>
    </div>  
  )
}
