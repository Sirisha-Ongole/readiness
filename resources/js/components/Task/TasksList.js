import React, { useEffect, useRef, useState } from "react";
import { Form, Card, Button, Col, Row } from "react-bootstrap";
import { taskSelector, store } from "../../Redux/store";
import * as actions from "../../Redux/actionTypes";
import * as action from "../../Redux/actions";

export const TasksList = () => {
    let [tasklist, updateTasksList] = useState();

    store.subscribe(() => {
        updateTasksList(taskSelector(store.getState()));
    });
    useEffect(() => {
        updateTasksList(taskSelector(store.getState()));
    }, []);


    //Create useref for Card 
    const cardRef = useRef([]);
    cardRef.current =tasklist && tasklist.map((task,index) => (cardRef.current && cardRef.current[index]) ?? React.createRef());
    
    const selectCard = (currentCard,index) => {
      cardRef.current.map((ref) => ref.current.classList.remove("bg-warning"));
      currentCard.current.classList.add("bg-warning");
      setCurrentTaskDetails(index);
    }

    
    const setCurrentTaskDetails = (index) => {
      const res = {
        taskIndex : index,
        taskDetails : tasklist[index].data.attributes
      }
      store.dispatch({
        type: actions.set_current_task,
        payload: res,
      });  
    }

  
    return (
        <>
            {tasklist &&
                tasklist.map(
                    (task,index) =>
                    <Card ref={cardRef.current[index]} className="mb-3 mt-1" onClick={e => selectCard(cardRef.current[index],index)} style={{ cursor: "pointer" }}>
                    <Card.Header>{task.data.attributes.body}</Card.Header>
                    <Card.Body>
                      <Card.Title>
                        <Form><Form.Check type="checkbox" label={`Duration :${task.data.attributes.duration} mins`}/></Form></Card.Title>
                      <Card.Text>
                        {
                           //JSON.stringify(task.data.attributes.pomodoro_template)
                          task.data.attributes.pomodoro_template.type == 'pomodoro' ? <div className="ms-5">Promodoro Set timings {task.data.attributes.pomodoro_template.attributes.cycle_time} mins</div> : <div></div>
                        }
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  
                )}
        </>
    );
};
