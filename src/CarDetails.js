import { useEffect, useRef } from "react";

export function CarDetails(props) {

    const ref= useRef()

    useEffect(() =>{
        ref.current.reset()},[props.initialData])

        return (

            <form ref={ref}>
            {Object.entries(props.initialData).map((entry) => <input name={entry[0]} defaultValue={entry[1]}/>)}
            
        </form>
        )
    }