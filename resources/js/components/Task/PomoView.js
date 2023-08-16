import React, { createRef, useRef } from "react";
import { useSelector } from "react-redux";
import { Button,Tab,Tabs} from "react-bootstrap";
import Countdown from "react-countdown";
import { rendertime } from "./PomoTimerFormat";
import { store } from "../../Redux/store";

export const PomoView = () => {

    const handleResetClick = (e) => {
        tabRef.current[e.target.value].current.getApi();
        tabRef.current[e.target.value].current.stop();
    };
    const handleStartClick = (e) => {
        tabRef.current[e.target.value].current.getApi();
        tabRef.current[e.target.value].current.start();
    };

    const currentPomoDetails = useSelector((state) => state.currentTaskReducer.taskDetails.pomodoro_template.attributes);
    const CurrentTaskDetails = useSelector((state) => state.currentTaskReducer.taskDetails);    


    let filteredPomoDetails = currentPomoDetails && Object.entries(currentPomoDetails).
    filter((pomo, i) => pomo[0] != "pmodoro_id" && pomo[0] != "cycle_count");

    filteredPomoDetails = filteredPomoDetails && filteredPomoDetails.map((names, i) => [names[0], names[1] * 60000]);
    console.log(filteredPomoDetails);

    const tabRef = useRef([]);
    tabRef.current = filteredPomoDetails && filteredPomoDetails.map((names, i) => (tabRef.current && tabRef.current[i]) ?? React.createRef());
    console.log(tabRef.current);

    return (
        <>
          <Tabs defaultActiveKey="cycle_time" id="uncontrolled-tab-example" className="mb-3">
            {filteredPomoDetails &&
               filteredPomoDetails.map((names, i) => (
                    <Tab eventKey={names[0]} title={names[0]}>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <h1 className="text-center">{CurrentTaskDetails.body}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="text-center">
                                        <h1>
                                        <Countdown date={Date.now() + names[1]} renderer={rendertime} autoStart={false} ref={tabRef.current[i]} />
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="text-center">
                                    <Button value={i} onClick={handleStartClick} variant="primary" className="m-2">Start</Button>
                                    <Button value={i} onClick={handleResetClick} variant="secondary" className="m-2">Rest</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                ))}
                </Tabs>
        </>
    );
    };
