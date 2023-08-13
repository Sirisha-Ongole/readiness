import React, { useEffect, useState } from "react";
import { zeroPad } from "react-countdown";

export const PomoTimerFormat = () => {
    
};
const timeformat = ({ minutes, seconds },taskName) => {  
    return (
        <>
            <div>{taskName}</div> 
            <div>
                {zeroPad(minutes)} :
                {zeroPad(seconds)}
            </div>
        </>
    ); 
}

export const rendertime = ({ hours, minutes, seconds, completed }) => {  
   const taskName = "Test Task";
    if (completed) { 
        return timeformat({ minutes, seconds }, taskName)
    } else {
        return timeformat({ minutes, seconds }, taskName)
    }

};  