import React from "react";
import "./index.css";
class Clinic extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return<div>

            {this.props.children}
        </div>
    }
}
export default Clinic;