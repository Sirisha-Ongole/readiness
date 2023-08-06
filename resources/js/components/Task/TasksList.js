import React, { useEffect, useRef, useState } from "react";
import { Form, Card, Button, Col, Row } from "react-bootstrap";
import { taskSelector, store } from "../../Redux/store";
import * as actions from "../../Redux/actionTypes";
import * as action from "../../Redux/actions";
import Task from "laravel-mix/src/tasks/Task";

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
