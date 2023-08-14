import React, { createRef, useRef, useEffect } from "react";
import { PomoTimer } from "./PomoTimer";
import { useSelector } from "react-redux";
import {
    Button,
    Modal,
    istGroup,
    Col,
    Tab,
    Row,
    ListGroupItem,
    Card,
    Container,
    Tabs,
    Table,
} from "react-bootstrap";
import { CountdownApi } from "react-countdown";
import Countdown from "react-countdown";
import { rendertime } from "./PomoTimerFormat";
import { set } from "lodash";

export const PomoView = () => {
    var CountdownApi;
    const handleResetClick = (e) => {
        console.log(e.target.value);
        tabRef.current[e.target.value].current.getApi();
        tabRef.current[e.target.value].current.stop();
    };
    const handleStartClick = (e, i) => {
        console.log(e.target.value);
        tabRef.current[e.target.value].current.getApi();
        tabRef.current[e.target.value].current.start();
    };

    console.log("test");

    //const currentPomoDetails = useSelector((state) => state.currentTaskReducer.taskDetails.pomodoro_template.attributes);

    //write a filter function to filter out the pomodoro_id from the currentPomoDetails
    const currentPomoDetails = useSelector(
        (state) =>
            state.currentTaskReducer.taskDetails.pomodoro_template.attributes
    );
    console.log(currentPomoDetails);
    const filteredPomoDetails =
        currentPomoDetails &&
        Object.entries(currentPomoDetails).filter(
            (pomo, i) => pomo[0] != "pmodoro_id" && pomo[0] != "cycle_count"
        );

    const tabRef = useRef([]);
    tabRef.current =
    filteredPomoDetails &&
    filteredPomoDetails.map(
            (names, i) =>
                (tabRef.current && tabRef.current[i]) ?? React.createRef()
        );

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
                                    <h1 className="text-center">Pomodoro Timer</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="text-center">
                                        <h1>
                                        <Countdown date={Date.now() + 1.2e6} renderer={rendertime} autoStart={false} ref={tabRef.current[i]} />
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
