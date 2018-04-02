import React from "react";
import "./index.css";
import {
    NavLink
} from "react-router-dom";
class Navbar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return<div>
            <ul className="top">
                <li className="logo">
                    <img src="images/logo.png"/>
                </li>
                <li className="please">您好，请</li>
                <li className="login1"><NavLink to="/login" >登录</NavLink> <NavLink to="register" className="register1">注册</NavLink></li>
            </ul>

           <p className="navbar" onClick={()=>{
           this.props.event();
           }}> <i className="iconfont" >&#xe6fa;</i></p>
        </div>
    }
}
export default Navbar;