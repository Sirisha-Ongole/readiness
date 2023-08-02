import {
    Button,
    Modal,
    ListGroup,
    Col,
    Tab,
    Row,
    ListGroupItem,
    Card,
    Container,
    Tabs,
    Table,
} from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Countdown, { zeroPad } from "react-countdown";
import {store, currentTaskDetails, currentTaskIndex, currentTaskPomodor } from "../../Redux/store";
export const PomoTimer = () => {

    const [initTime, updateInitTime] = useState(Date.now() + 1.2e+6);
    const [taskName, updateTaskname] = useState("");
    const [currentTaskIndexVal, updatecurrentTaskIndexVal] = useState("");
    const [currentTaskPomodorVal, updatecurrentTaskPomodorVal] = useState({
        cycle_count: "",
        cycle_time: "",
        long_break: "",
        pmodoro_id: "",
        short_break: ""
    });


    const date = new Date();
        date.setMinutes(date.getMinutes() + 240);
        const showTime = date.getHours()+ ':' + date.getMinutes();

    store.subscribe(() => {
        currentTaskIndex(store.getState()) 
        && updatecurrentTaskIndexVal(currentTaskIndex(store.getState()));

        currentTaskPomodor(store.getState()) 
        && updatecurrentTaskPomodorVal(currentTaskPomodor(store.getState()).attributes);

        currentTaskDetails(store.getState()) 
        && updateTaskname(currentTaskDetails(store.getState()).body);
        
        handleResetClick();
    }); 

    let CountdownApi
    const handleStartClick = () => {
        CountdownApi && CountdownApi.start();
    };

    const handleResetClick = () => {
        updateInitTime(Date.now() + 1.2e+6);
        CountdownApi && CountdownApi.stop();
    };

    const setRef = (data, cd) => {
        console.log(data);
        console.log(cd);
            if (cd && data == "a1") {
            CountdownApi = cd.getApi();
            }
    };

    const timeformat = ({ minutes, seconds }) => {  
        return (
            <>
                <div className="me-5">{taskName}</div> 
                <div className="w-50 d-flex justify-content-center align-items-center">
                    {zeroPad(minutes)} :
                    {zeroPad(seconds)}
                </div>
            </>
        ); 
    }

    const rendertime = ({ hours, minutes, seconds, completed }) => {  
            if (completed) { 
                return timeformat({ minutes, seconds })
            } else {
                return timeformat({ minutes, seconds })
            }

    };  


    const countdownDiv = (initTime) => {
        var indents = [];
        for (var i = 1; i < currentTaskPomodorVal.cycle_count+1; i++) {
            indents.push(
            <>
                <tr>
                    <td>cycle #{i} pomodoro </td>
                    <td><Countdown date={Date.now() + (currentTaskPomodorVal.cycle_time * 60000)} renderer={rendertime} autoStart={false} ref={setRef("a"+i)}/></td>
                </tr>
                <tr>
                    <td>Short Break</td>
                    <td><Countdown date={Date.now() + (currentTaskPomodorVal.short_break * 60000)} renderer={rendertime} autoStart={false} ref={setRef("b"+i)}/></td>
                </tr>
            </>);
        }
            return (
                <>
                {indents} 
                </>
            );
    }

return (
        <>   
        <div className="bg-warning">
                <Row class="m-5 my-auto">
                <Col>
                <Table striped bordered hover>
                <thead>
                <th>task</th>
                <th>Time</th>
                </thead>
                <tbody>
                {countdownDiv(Date.now() + 1.2e+6)}
                <tr>
                    <td>Long Break</td>
                    <td><Countdown date={Date.now() + (currentTaskPomodorVal.long_break * 60000)} renderer={rendertime} autoStart={false} ref={setRef}/></td>
                </tr>
                </tbody>
                </Table>
                <div className="me-5">Finish Time : {showTime}</div> 
                <Button variant="primary" className="m-2 float-right" onClick={e => handleStartClick()}>Start</Button>
                <Button variant="primary" onClick={e => handleResetClick()}>Reset</Button>
                </Col>
                </Row>
                </div>
        </>
    );
};


