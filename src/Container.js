import React from "react";

export class Container extends React.Component{
    componentDidMount(){
        document.title = this.props.title}
    render(){
       
        return(
            
            <div className="container">
                {this.props.children}
            </div>
        )
    }
}