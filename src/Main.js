import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Basic from "./web/basic/Basic_Main";
import cardStyle from "./web/cardStyle/CardStyle_Main";
import To_Do from "./web/To-Do/To_Do";

class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div className="main">
            <div className="main_menu">
              <h4 className="title"><span>JEMA</span><br/>-The Tech Guy</h4>
              <ul className="website_list">
                <li><NavLink to="/basic">Basic</NavLink></li>
                <li><NavLink to="/cardStyle">Card Styles</NavLink></li>
                <li><NavLink to="/to_Do">To Do</NavLink></li>
              </ul>
            </div>
            <div className="page_frame">
              <Route path="/basic" component={Basic}/>
              <Route path="/cardStyle" component={cardStyle}/>
              <Route path="/to_Do" component={To_Do}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }


  export default Main;