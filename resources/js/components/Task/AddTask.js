import { Button,Modal,ListGroup , Col, Tab, Row, ListGroupItem, Alert } from 'react-bootstrap'
import { AddTaskDetails } from './AddTaskDetails'
import { AddTaskPomodoro } from './AddTaskPomodoro'
import React,{ useState, useEffect } from 'react';
import { addpomoDB, addtaskDB, getTasks } from '../../Redux/actions';
import {store } from "../../Redux/store";


function AddTask({showModal, handleModalClose, ...props}) {

  const [alertStatus,updatealertStatus] = useState("");
  let newPomoID = store.getState().addToDB.new_pmodoro_id;
  let newTaskID = store.getState().addToDB.new_task_id;
  let DBstatus = store.getState().addToDB.status;
  const [newptID,setNewptID] = useState(null);  

  const addTaskChangeEvent = (field) => {
    updateTaskInfo({ ...taskInfo ,...field });
  };
  const [taskInfo, updateTaskInfo] = useState({
      pt_id: "",
      body: "",
      duration: "",
  });

  const addPomodoroChangeEvent = (field) => {
    updatePomoInfo({ ...pomoInfo ,...field });
  };
  const [pomoInfo, updatePomoInfo] = useState({
          cycle_time : "",
          short_break : "",
          long_break : "",
          cycle_count_lb : ""
  });

  const AddTasktoDB = (pomoInfo,taskInfo) => {
    store.dispatch(addpomoDB(pomoInfo));
    store.subscribe(() => {
      const newPomoID = {pt_id: newPomoID};
      updateTaskInfo({ ...taskInfo ,...newPomoID });
    });
  }
  useEffect(() => { 
    updatealertStatus(DBstatus);
  },[DBstatus]);

  
  useEffect(() => {
    if(newTaskID == null && newPomoID != null){
    const PomoID = {pt_id: newPomoID};
    updateTaskInfo({ ...taskInfo ,...PomoID });
    setNewptID(newPomoID);
    }
}, [newPomoID]);

useEffect(() => {
  (newPomoID != null && DBstatus == "success") && (store.dispatch(addtaskDB(taskInfo)) && store.dispatch(getTasks())) ;
}, [newptID]);

    return (
<>
<Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tab.Container id="set-task" defaultActiveKey="#taskDetails">
            <Row>
              <Col sm={4}>
                <ListGroup>
                  <ListGroupItem action href='#taskDetails'>Task Details </ListGroupItem>
                  <ListGroupItem action href='#setPomodoro'>Set Pomodoro</ListGroupItem>
                </ListGroup>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  <Tab.Pane eventKey="#taskDetails"><AddTaskDetails addTaskChangeEvent={addTaskChangeEvent} page={props.page}/></Tab.Pane>
                  <Tab.Pane eventKey="#setPomodoro"><AddTaskPomodoro addPomodoroChangeEvent={addPomodoroChangeEvent} page={props.page} /></Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Modal.Body>
        <Modal.Footer>
          {alertStatus === "error" && <Alert variant="danger">Please fill all the fields</Alert>}
          {alertStatus === "success" && <Alert variant="primary">Sucessfully added the Task</Alert>}
          <Button mr-8 variant="primary" onClick={(e) => AddTasktoDB(pomoInfo,taskInfo)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
      )
  
}

export default AddTask