import React from "react";
import "./index.css";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import {
    NavLink
} from "react-router-dom";
class Sidebar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            ydzsclick1:false,
            ydzsclick2:false
        }
    }
    render(){
        return<div>
            <ReactCSSTransitionGroup
                transitionName="kerwin"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
            {
                this.props.show?
                          <nav>
                            <ul>
                                <li onClick={()=>{
                            this.props.event();
                            }}><NavLink to="/home" activeClassName="active">首页</NavLink></li>

                                <ReactCSSTransitionGroup
                                    transitionName="click1"
                                    transitionEnterTimeout={500}
                                    transitionLeaveTimeout={300}>
                                <li onClick={this.ydzsclick.bind(this)}><NavLink to="/clinic">移动诊所</NavLink></li>
                                {


                                        this.state.ydzsclick1? <ul>
                                    <li onClick={()=>{
                                  this.props.event();
                            }}><NavLink to="/clinic/doctor">找医生</NavLink></li>
                                    <li onClick={()=>{
                                        this.props.event();
                                    }}><NavLink to="/clinic/registration">预约挂号</NavLink></li>
                                    <li onClick={()=>{
                                        this.props.event();
                                    }}><NavLink to="/clinic/robot">机器人医生</NavLink></li>
                                </ul>:null

                                }
                                    </ReactCSSTransitionGroup>
                                <li onClick={()=>{
                            this.props.event();
                            }}><NavLink to="/shop">如医商城</NavLink></li>



                                <li onClick={this.ydzsclick1.bind(this)}><NavLink to="/community/medicine">社区</NavLink></li>
                                {
                                    this.state.ydzsclick2? <ul>
                                        <li onClick={()=>{
                                  this.props.event();
                            }}><NavLink to="/community/medicine">药物捐赠</NavLink></li>
                                        <li onClick={()=>{
                                        this.props.event();
                                    }}><NavLink to="/community/circle">圈子</NavLink></li>
                                    </ul>
                                        :null
                                }
                            </ul>
                        </nav>
                    :null
            }
                </ReactCSSTransitionGroup>

        </div>
    }
    ydzsclick(){
        this.setState({
            ydzsclick1 :!this.state.ydzsclick1
        })
    }

    ydzsclick1(){
        this.setState({
            ydzsclick2 :!this.state.ydzsclick2
        })
    }

}
export default Sidebar;