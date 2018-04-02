import React, { Component } from 'react';
import './App.css';
import Navbar from "./Components/Common/Navbar";
import Sidebar from "./Components/Common/Sidebar";
class App extends Component {
    constructor(){
        super();
        this.state={
            isShow:false
        }
    }
  render() {
    return (

      <div className="App">
          <Navbar event={()=>{
          this.setState({
          isShow:!this.state.isShow
          })
          }}/>
          <Sidebar show={this.state.isShow} event={()=>{
            this.setState({
          isShow:false
          })
          }}/>
          {this.props.children}
      </div>
    )
  }
    componentDidMount(){
        fetch("/site/casapi/login.json").then(res=>res.json()).then(res=>{
             console.log(res);
        })
    }
}
export default App;
