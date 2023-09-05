import React from 'react'
import { useSelector } from 'react-redux';
import { FloatingLabel, Form } from 'react-bootstrap'

export const AddTaskDetails = ({...props}) => {

const CurrentTaskDetails = useSelector((state) => state.currentTaskReducer.taskDetails);
  
return (
    <>
    <Form>
    <Form.Group className="mb-3" controlId='taskTitle'> 
    <Form.Control required type="text" placeholder="Title" defaultValue={props.page == "add" ?  "": CurrentTaskDetails.body}></Form.Control>
    </Form.Group>
    <FloatingLabel controlId='tasks-notes' label='notes'>
    <Form.Control required as="textarea" placeholder='Tasks Notes' onChange={(e) => props.addTaskChangeEvent({ body: e.target.value })} style={{ height: '100px' }} defaultValue={props.page == "add" ? "" : CurrentTaskDetails.body}></Form.Control>
    </FloatingLabel>
    <Form.Group className="mt-3" controlId='taskTitle'> 
    <input required type="number" className="form-control" id="pomShortBreakLength" 
    onChange={(e) => props.addTaskChangeEvent({ duration: e.target.value })} step="1" min="1" max="1440" placeholder='Duration in mintues' defaultValue={props.page == "add" ? "" : CurrentTaskDetails.duration}></input>
    </Form.Group>
    </Form>
    </>
  )
}
