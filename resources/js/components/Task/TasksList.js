import React, { useEffect, useState } from "react";
import { taskSelector, store } from "../../Redux/store";

export const TasksList = () => {
    let [tasklist, updateTasksList] = useState();

    store.subscribe(() => {
        updateTasksList(taskSelector(store.getState()));
    });
    useEffect(() => {
        updateTasksList(taskSelector(store.getState()));
    }, []);
  
    return (
        <>
            {tasklist &&
                tasklist.map(
                    (task,index) =>
                    <TaskView tasklist={tasklist} index={index} task={task} />
                )}
        </>
    );
};
