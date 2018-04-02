import React from "react";
import "./index.css";
class Community extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return<div>

            {this.props.children}
        </div>
    }
}
export default Community;