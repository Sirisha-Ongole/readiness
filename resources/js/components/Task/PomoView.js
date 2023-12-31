import React, { createRef, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button,Tab,Tabs} from "react-bootstrap";
import Countdown from "react-countdown";
import { store } from "../../Redux/store";
import { zeroPad } from "react-countdown";
import { Box } from '@chakra-ui/react';
import { Center } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';

export const PomoView = () => {
    
    const handleResetClick = (tab) => {
        tab.current.getApi();
        tab.current.stop();
    };
    const handleStartClick = (tab) => {
        tab.current.getApi();
        tab.current.start();
    };

    const currentPomoDetails = useSelector((state) => state.currentTaskReducer.taskDetails.pomodoro_template.attributes);
    const CurrentTaskDetails = useSelector((state) => state.currentTaskReducer.taskDetails);    


    let filteredPomoDetails = currentPomoDetails && Object.entries(currentPomoDetails).
    filter((pomo, i) => pomo[0] != "pmodoro_id" && pomo[0] != "cycle_count");

    filteredPomoDetails = filteredPomoDetails && filteredPomoDetails.map((names, i) => [names[0], names[1] * 60000]);

    let cycle_time = filteredPomoDetails ? filteredPomoDetails[0][1] : 0;
    let short_break_time = filteredPomoDetails ? filteredPomoDetails[2][1] : 0;
    let long_break_time = filteredPomoDetails ? filteredPomoDetails[1][1] : 0;


    let tabRef = useRef();
    useEffect(() => {
        filteredPomoDetails && 
        (tabRef.current = tabRef.current ?? React.createRef() ,
        tabRef.current.getApi(),
        tabRef.current.stop())
    }, [CurrentTaskDetails]);

    const PomoTimer = () => <Countdown date={Date.now() + cycle_time} renderer={pomotimeRender} autoStart={false} ref={tabRef} ></Countdown>;
    const ShortBreak = () => <Countdown date={Date.now() + short_break_time} renderer={shortBreakRender} autoStart={true} ref={tabRef} ></Countdown>;
    const LongBreak = () => <Countdown date={Date.now() + long_break_time} renderer={longBreakRender} autoStart={true} ref={tabRef} ></Countdown>;
    const pomotimeRender = ({ hours, minutes, seconds, completed }) => {  
        if (completed) {    
            return <ShortBreak />;
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
    const shortBreakRender = ({ hours, minutes, seconds, completed }) => {  
        if (completed) {  
            return <LongBreak />;
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
    const longBreakRender = ({ hours, minutes, seconds, completed }) => {  
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
                    {(filteredPomoDetails) ? (
                    <Box w='100%' startColor='pink.500' endColor='orange.500' bgGradient='linear(to-l, #7928CA, #FF0080)' padding='6'>
                    <Center>
                    <SimpleGrid columns={1} spacingY='20px'>
                    <Heading as='h2' size='3xl'>{CurrentTaskDetails.body}</Heading>
                        <PomoTimer />
                        <Box>
                        <Button value={0} onClick={(e) => handleStartClick(tabRef)} variant="primary" className="m-2">Start</Button>
                        <Button value={0} onClick={(e) => handleResetClick(tabRef)} variant="secondary" className="m-2">Rest</Button>
                        </Box>
                   </SimpleGrid>
                    </Center>    
                    </Box>
                        ) : ("")}
        </>
    );
    };
