import React, { createRef, useRef } from 'react';
import { PomoTimer } from './PomoTimer';
import { useSelector } from 'react-redux';
import { Button, Modal,istGroup,Col,Tab,Row,ListGroupItem,Card,Container,Tabs,Table} from "react-bootstrap";
import { CountdownApi } from 'react-countdown';
import Countdown from 'react-countdown';
import { rendertime } from "./PomoTimerFormat";
import { set } from 'lodash';

export const PomoView = () => {
    
    var CountdownApi;
    const handleResetClick = (tabname) => {
       if(tabname.name == "pomodoro"){
        console.log(setRefpomo);
        setRefpomo.current.getApi();
        setRefpomo.current.stop();
       }else{
        setRefshort.current.getApi();
        setRefshort.current.stop();
       }

    // setRefNew.current.getApi();
    // setRefNew.current.stop();
    }
    const handleStartClick = (tabname) => {    
        if(tabname.name == "pomodoro"){
            setRefpomo.current.getApi();
            setRefpomo.current.start();
           }else{
            setRefshort.current.getApi();
            setRefshort.current.start();
           }
    }


      const currentPomoDetails = useSelector((state) => state.currentTaskReducer.taskDetails.pomodoro_template.attributes);    
      console.log(currentPomoDetails);
      const setRefpomo = useRef();
      const setRefshort = useRef();

    //   const setRefNew = useRef();
    //   setRefNew.current = currentPomoDetails && Object.entries(currentPomoDetails).map(([key, value]) => {  
    //     if (key != "id" && key != "cycle_count" && key != "pomodoro_id") {
    //         (setRefNew.current && setRefNew.current[key]) ?? React.createRef(); 
    //     } 
    // });

    return (
    <>
    <Tabs defaultActiveKey="pomodoro" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="pomodoro" title="Pomodoro">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="text-center">Pomodoro Timer</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="text-center">
                                    <h1>
                                        <Countdown date={Date.now() + 1.2e+6} renderer={rendertime} autoStart={false} ref={setRefNew}/>
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="text-center">
                                    <Button onClick={(e) => handleStartClick({ name: e.target.value })} variant="primary" className="m-2" value="pomodoro">Start</Button>
                                    <Button onClick={(e) => handleResetClick({ name: e.target.value })} variant="secondary" className="m-2" value="pomodoro">Reset</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="short time" title="Short Time">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="text-center">Short Time Timer</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="text-center">
                                    <h1>
                                    <Countdown date={Date.now() + 1.2e+6} renderer={rendertime} autoStart={false} ref={setRefNew}/>
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="text-center">
                                    <Button onClick={(e) => handleStartClick({ name: e.target.value })} variant="primary" className="m-2" value="shorttime">Start</Button>
                                    <Button onClick={(e) => handleResetClick({ name: e.target.value })} variant="secondary" className="m-2" value="shorttime">Reset</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab></Tabs>
    
    </>
  )
}
