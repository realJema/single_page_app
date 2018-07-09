import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <div className="basic_postCard">
            <h2>HELLO</h2>
            <p>
                My Name is <b>Jean-Marie</b> am a technology enthousiaste
                this is a page a built using the reactjs framework. I did
                this is less than 10minutes <i>sounds pretty impressive</i>
                What amazes me most is the load times of the pages and also 
                the seemless transition there is to it, but am worried about 
                these when it comes to loading pages with alot of data. Follow 
                me on my journey to discover react.
            </p>
    
            <p>PS: I am an engineering student in the university of Buea, Cameroon :p</p>
        </div>

        <div className="basic_postCard">
            <h2>Welcome</h2>
            <p>
                Weclome to the page full of postcards, each postcard contains information
                which is useful to the user, he can get customized information to his needs
                sorry guys, i had to come up with a quick lorem ipsum and i really don't 
                have much to say at the moment 
            </p>
        </div>
      </div>
    );
  }
}
 
export default Home;