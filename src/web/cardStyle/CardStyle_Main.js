import React, { Component } from "react";
import {
  Route,
  NavLink 
} from "react-router-dom";
import "./index.css";
import News from "./pages/News";
import Events from "./pages/Events";

class cardStyle extends Component {

    render() {
      return (
        <div>
          <div>
            <ul className="card_header">
              <li><NavLink exact to="/cardStyle">News</NavLink></li>
              <li><NavLink to="/cardStyle/events">Events</NavLink></li>
              <li><NavLink to="/cardStyle">News</NavLink></li>
              <li><NavLink to="/cardStyle/events">Events</NavLink></li>
            </ul>
          </div>
          <div>
            <Route exact path="/cardStyle" component={News}/>
            <Route path="/cardStyle/events" component={Events}/>
          </div>
        </div>
      );
    }
}
  export default cardStyle;