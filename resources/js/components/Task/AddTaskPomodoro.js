import React from 'react'
import { Button,Modal,ListGroup , Col, Tab, Row, ListGroupItem, Tabs } from 'react-bootstrap'


export const AddTaskPomodoro = () => {
  return (
    <>
        <Tabs defaultActiveKey="shortBreak" id="set-pomodoro" className="mb-3" fill > 
            <Tab eventKey='shortBreak' title="Short Break">5:00</Tab>
            <Tab eventKey='longBreak' title="Long Break">20:00</Tab>
            <Tab eventKey='loop' title="Loop">4</Tab>
        </Tabs>
    </>
  )
}
