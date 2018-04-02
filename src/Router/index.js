import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect

} from "react-router-dom";
import React from "react";
import App from "../App";
import Home from "../Components/Home"; //首页
import Clinic from "../Components/Clinic";//移动诊所
import Doctor from "../Components/Clinic/Doctor";
import Registration from "../Components/Clinic/Registration";
import Robot from "../Components/Clinic/Robot";
import Community from "../Components/Community";//社区

import Medicine from "../Components/Community/Medicine";//药物捐赠
import Circle from "../Components/Community/Circle";//圈子

import Shop from "../Components/Shop";
import Login from "../Components/Login";
import Register from "../Components/Register";


const router = (
    <Router>
        <App>
                <Route path="/home" component={Home}/>

                <Route path="/clinic" render={()=>
                        <Clinic>
                          <Switch>
                            <Route path="/clinic/doctor" component={Doctor}/>
                            <Route path="/clinic/registration" component={Registration}/>
                            <Route path="/clinic/robot" component={Robot}/>
                            <Redirect from="/" to="/clinic/doctor"/>
                          </Switch>
                        </Clinic>
			    }/>
                <Route path="/shop" component={Shop}/>



                <Route path="/community" render={()=>
				<Community>
				  <Switch>
					<Route path="/community/medicine" component={Medicine}/>
					<Route path="/community/circle" component={Circle}/>
					<Redirect from="/" to="/community/medicine"/>
				  </Switch>
				</Community>
			}/>


                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>

        </App>
    </Router>
)
export default router;


