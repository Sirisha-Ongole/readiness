import React from 'react';
import React, { useEffect, useState } from "react";
import {store, currentTaskDetails, currentTaskIndex, currentTaskPomodor } from "../../Redux/store";
import { Countdown } from 'react-countdown';
import { rendertime } from "../Utility";

export const pomoTimerCal = () => {

    const [initTime, updateInitTime] = useState(Date.now() + 1.2e+6);
    const [currentTaskIndexVal, updatecurrentTaskIndexVal] = useState("");
    const [currentTaskPomodorVal, updatecurrentTaskPomodorVal] = useState({
        cycle_count: "",
        cycle_time: "",
        long_break: "",
        pmodoro_id: "",
        short_break: ""
    });
    
    store.subscribe(() => {
        currentTaskIndex(store.getState()) 
        && updatecurrentTaskIndexVal(currentTaskIndex(store.getState()));
    
        currentTaskPomodor(store.getState()) 
        && updatecurrentTaskPomodorVal(currentTaskPomodor(store.getState()).attributes);
    
        currentTaskDetails(store.getState()) 
        && updateTaskname(currentTaskDetails(store.getState()).body);
        
        handleResetClick();
    }); 
            return (
                <>
                </>
            );
    }
