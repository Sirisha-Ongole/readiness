import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'

export const AddTaskDetails = () => {
  return (
    <>
    <Form>
        <Form.Group className="mb-3" controlId='taskTitle'> 
            <Form.Control type="text" placeholder="Title"></Form.Control>
        </Form.Group>
       <FloatingLabel controlId='tasks-notes' label='notes'>
        <Form.Control as="textarea" placeholder='Tasks Notes'  style={{ height: '100px' }}></Form.Control>
       </FloatingLabel>
    </Form>
    </>
  )
}
