import React, { useState }from 'react'
import { useSelector } from 'react-redux';
import { Button,Modal,ListGroup , Col, Tab, Row, ListGroupItem, Tabs } from 'react-bootstrap'
import { Input } from '@chakra-ui/react'


export const AddTaskPomodoro = ({...props}) => {

  const currentPomoDetails = useSelector((state) => state.currentTaskReducer.taskDetails.pomodoro_template.attributes);

  return (
    <>
        <Tabs defaultActiveKey="pomodoro" id="set-pomodoro" className="mb-3" fill > 

            <Tab eventKey='pomodoro' title="Pomodoro">
            <input required type="number" className="form-control" id="pomodoroCycleTime" 
            onChange={(e) => props.addPomodoroChangeEvent({ cycle_time : e.target.value })} defaultValue={props.page == "add" ? "": currentPomoDetails.cycle_time} step="1" min="1" max="60" placeholder='25 minitues'>
            </input>
            </Tab>
            <Tab eventKey='shortBreak' title="Short Break">
            <input  required type="number" className="form-control" id="pomShortBreakLength" 
            onChange={(e) => props.addPomodoroChangeEvent({ short_break : e.target.value })} defaultValue={props.page == "add" ?  "": currentPomoDetails.short_break} step="1" min="1" max="60" placeholder='5'>
            </input>
            </Tab>
            <Tab eventKey='longBreak' title="Long Break">
            <input type="number" className="form-control" id="pomLongBreakLength" 
            onChange={(e) => props.addPomodoroChangeEvent({ long_break : e.target.value })} defaultValue={props.page == "add" ? "": currentPomoDetails.long_break} step="1" min="1" max="60" placeholder='30'>
            </input>  
            </Tab>
            <Tab eventKey='loop' title="Loop">
            <input type="number" className="form-control" id="pomLoop" 
            onChange={(e) => props.addPomodoroChangeEvent({ cycle_count_lb : e.target.value })} defaultValue={props.page == "add" ? "": currentPomoDetails.cycle_count} step="1" min="1" max="10" placeholder='3'></input>
            </Tab>
        </Tabs>
    </>
  )
}
