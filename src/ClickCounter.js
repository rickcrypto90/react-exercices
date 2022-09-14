import React from "react";
import { useClickCounter } from "./useClickCounter";

export function ClickCounter() {
    const { value, increment, decrement, reset } = useClickCounter();
    return (
        <div>
            <p>{value}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>

        </div>
    )

}