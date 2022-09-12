import React from "react";
import { useState, useEffect } from "react";
//  export class ClickCounter extends React.Component {
//   constructor(props) {
//      super(props);
//      this.state = {count: 0};
//      this.handleClick = this.handleClick.bind(this);
//   }
//      handleClick() {
//          this.setState({ count: this.state.count + 1 });
//      }
//      render() {
//          return (
//              (<div>
//                  <p>{this.state.count}</p>
//                  <button onClick={this.handleClick}>click me</button>
//              </div>)
//          )
//      }
//  }
export function ClickCounter(props) {
    const [count, setCount] = useState(0);
    useEffect(() => {
          props.sideEffect(count);
      });
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>click me</button>
        </div>
    )

}