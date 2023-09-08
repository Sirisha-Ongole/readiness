import React from 'react';
import { TaskView } from './Task/TaskView';
import { GraphView } from './Graph/GraphView';
import { PomoView } from './Task/PomoView';
import { Box } from '@chakra-ui/react';

export const MainContainer = () => {
  return (
    <Box w='100%' bgGradient='linear(to-l, #7928CA, #FF0080)' padding='6'>
      <PomoView></PomoView>
      <TaskView></TaskView>
      <GraphView></GraphView>
    </Box>  
  )
}
