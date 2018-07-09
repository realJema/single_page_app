import React, { Component } from "react";
import {
  Route,
  NavLink
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Stuff from "./pages/Stuff";
import Contact from "./pages/Contact";
import PluralSight from "./pages/PluralSight";

class Main extends Component {
    render() {
      return (
        <div className="basic_body">
          <h1 className="basic_h1">Jema <i>-The Tech Guy</i></h1>
          <ul className="basic_header">
            <li><NavLink exact to="/basic">Home</NavLink></li>
            <li><NavLink to="/basic/stuff">Stuff</NavLink></li>
            <li><NavLink to="/basic/contact">Contact</NavLink></li>
            <li><NavLink to="/basic/pluralsight">PluralSight</NavLink></li>
          </ul>
          <div className="basic_content">
            <Route exact path="/basic" component={Home}/>
            <Route path="/basic/stuff" component={Stuff}/>
            <Route path="/basic/contact" component={Contact}/>
            <Route path="/basic/pluralsight" component={PluralSight}/>
          </div>
        </div>
      );
    }
  }

  export default Main;