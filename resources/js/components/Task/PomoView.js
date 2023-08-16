import React, { createRef, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button,Tab,Tabs} from "react-bootstrap";
import Countdown from "react-countdown";
import { store } from "../../Redux/store";
import { zeroPad } from "react-countdown";

export const PomoView = () => {
    const handleResetClick = (tab) => {
        tab.current.getApi();
        tab.current.stop();
    };
    const handleStartClick = (tab) => {
        console.log(tab.current);
        tab.current.getApi();
        tab.current.start();
    };

    const currentPomoDetails = useSelector((state) => state.currentTaskReducer.taskDetails.pomodoro_template.attributes);
    const CurrentTaskDetails = useSelector((state) => state.currentTaskReducer.taskDetails);    


    let filteredPomoDetails = currentPomoDetails && Object.entries(currentPomoDetails).
    filter((pomo, i) => pomo[0] != "pmodoro_id" && pomo[0] != "cycle_count");

    filteredPomoDetails = filteredPomoDetails && filteredPomoDetails.map((names, i) => [names[0], names[1] * 60000]);
    console.log(filteredPomoDetails);

    

    //set tabRef on update of CurrentTaskDetails
    let tabRef = useRef();
    useEffect(() => {
        tabRef.current = tabRef.current ?? React.createRef();
        tabRef.current.getApi();
        tabRef.current.stop();
        console.log("set tabRef on update of CurrentTaskDetails");
        console.log(tabRef.current);
    }, [CurrentTaskDetails]);

    const Completionist1 = () => <Countdown date={Date.now() + 10000} renderer={rendertime} autoStart={false} ref={tabRef} ></Countdown>;
    const Completionist2 = () => <Countdown date={Date.now() + 10000} renderer={rendertime2} autoStart={true} ref={tabRef} ></Countdown>;
    const Completionist3 = () => <Countdown date={Date.now() + 10000} renderer={rendertime3} autoStart={true} ref={tabRef} ></Countdown>;
    const rendertime = ({ hours, minutes, seconds, completed }) => {  
        if (completed) {    
            return <Completionist2 />;
        }
        return (
            <>
                <div>PomoDoro Timer</div>
                <div>
                    {zeroPad(minutes)} :
                    {zeroPad(seconds)}
                </div>
            </>
        ); 
    
    };
    const rendertime2 = ({ hours, minutes, seconds, completed }) => {  
        if (completed) {  
            return <Completionist3 />;
        }
        return (
            <>
                <div>Short Break</div>
                <div>
                    {zeroPad(minutes)} :
                    {zeroPad(seconds)}
                </div>
            </>
        ); 
    
    };
    const rendertime3 = ({ hours, minutes, seconds, completed }) => {  
        if (completed) {    
            return <div>Completed</div>
        }
        return (
            <>
             <div>Long Break</div>
                <div>
                    {zeroPad(minutes)} :
                    {zeroPad(seconds)}
                </div>
            </>
        ); 
    
    };

    return (
        <>
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
                                        <Completionist1 />
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="text-center">
                                    <Button value={0} onClick={(e) => handleStartClick(tabRef)} variant="primary" className="m-2">Start</Button>
                                    <Button value={0} onClick={(e) => handleResetClick(tabRef)} variant="secondary" className="m-2">Rest</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
        </>
    );
    };
