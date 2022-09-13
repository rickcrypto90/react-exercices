import React, { useState, useEffect } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter(props) {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(true);
  
    function toggle() {
      setIsActive(!isActive);
    }
  
    function reset() {
      setSeconds(0);
      setIsActive(false);
    }
  
    useEffect(() => {
      let interval = null;
      if (isActive) {
        interval = setInterval(() => {
          setSeconds(seconds => seconds + 1);
        }, 1000);
      } else if (!isActive && seconds !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
     <div>
            <CounterDisplay count={seconds} />
            <button onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
            <button onClick={reset}>Toggle Mount</button>
     </div>
    )
}