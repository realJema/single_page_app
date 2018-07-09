import React, { Component } from "react";
import "./index.css";

class To_Do extends Component {

  constructor() {
    super();
    this.state = {
      works: []
    }
  }

  add() {
    var title = this.refs.title.value;
    if(localStorage.getItem('works') == null) {
      var works = [];
      works.push(title);
      localStorage.setItem('works', JSON.stringify(works));
    }else {
      works = JSON.parse(localStorage.getItem('works'));
      works.push(title);
      localStorage.setItem('works', JSON.stringify(works));
    }
    this.setState({
      works:JSON.parse(localStorage.getItem('works'))
    });
    // alert(title);
  }
  delete(e) {
    var index = e.target.getAttribute('data-key');
    var list = JSON.parse(localStorage.getItem('works'));
    list.splice(index, 1);
    this.setState({
      works: list
    });
    localStorage.setItem('works', JSON.stringify(list));
  }

    render() {
      return (
        <div className="todo_main">
          <h3>My To Do List</h3>
          <input type="text" placeholder="Title..." ref="title"/>
          <input type="button" value="Add" onClick={this.add.bind(this)}/>
          <br/><br/>

          <ul>
            {this.state.works.map(function(work, index) {
              return (
                <li> <span className="todo_content" key={index}>{work}</span> <input className="todo_close" type="button" value="X" onClick={this.delete.bind(this)} data-key={index}/>
                </li>
              );
            }, this)}
          </ul>
        </div>
      );
    }
}
  export default To_Do;