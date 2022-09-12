import React from "react";
import { Age } from './Age'
// export class Welcome extends React.Component {
//     render() {
//         return (
//             (<div className="welcome">
//                 <p>Welcome <strong>{props.name}</strong></p>
//                 {(props.age && props.age < 65 && props.name === "John") && <Age age={props.age} />}
//             </div>)
//         )
//     }
// }
// Welcome.defaultProps = {
//     name: "Stranger"
// }


export function Welcome(props) {
    return(
        <div className="welcome">
                <p>Welcome <strong>{props.name}</strong></p>
                {(props.age && props.age < 65 && props.name === "John") && <Age age={props.age} />}
            </div>
    )
}
Welcome.defaultProps = {
    name: "Stranger"
}