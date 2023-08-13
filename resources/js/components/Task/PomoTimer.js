import { rendertime } from "./PomoTimerFormat";
import Countdown from 'react-countdown';

export const PomoTimer = (...props) => {
    console.log(props);
    return (
        <>
         <Countdown date={Date.now() + 1.2e+6} renderer={rendertime} autoStart={false} ref={props[0].setRef}/>
        </>
                );
};
