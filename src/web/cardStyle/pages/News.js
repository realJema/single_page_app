import React, { Component } from "react";
import sam from "../img/sam.jpg";
import lefa from "../img/lefa.jpg";
import eminem from "../img/eminem.jpg";
import niska from "../img/niska.jpg";
import nrj from "../img/nrj.jpg";

class News extends Component {

    render() {
      return (
        // main div
        <div className="card_main">
          {/* card style divs */}
          <div className="card">
            <img src={sam} className="image" alt="img"/>
            <h4>Sam Smith</h4>
            <p>British Pop Artist with some deep songs. He is also gay</p> <span>Pop</span><span>#TooGoodAtGoodbyes</span>
            <span>#UK</span><span>#HIM</span><span>#SayItFirst</span>
          </div>
          <div className="card">
            <img src={lefa} className="image" alt="img"/>
            <h4>Lefa</h4>
            <p>French Rap Artist from the group "Sexion d'Assaut" with hit songs like "Quelques Minutes"</p>
            <span>Quelques Minutes</span><span>#EnFeux</span><span>#RappelleLa</span><span>20Ans</span>
          </div>
          <div className="card">
            <img src={eminem} className="image" alt="img"/>
            <h4>Eminem</h4>
            <p>Latest Album of Eminem, world wide Rap artist whose lyrics resound through time!</p>
            <span>Walking on Water</span><span>Tragic Endings</span><span>#Stan</span><span>FTSkylar</span>
          </div>
          <div className="card">
            <img src={niska} className="image" alt="img"/>
            <h4>Niska</h4>
            <p>Upcoming french Trap Artist with origins from Africa. </p>
            <span>LaWEWER</span><span>Amour X</span><span>Twerk dans l'Binks</span><span>#AhBon</span>
          </div>
          <div className="card">
            <img src={nrj} className="image" alt="img"/>
            <h4>NRJ</h4>
            <p>Popular french radio channel which host and streams all the latest track musics </p>
            <span>Ed Sheeran</span><span>Maitre Gims</span><span>#Beyonce</span><span>Justin Bieber</span>
          </div>
        </div>
      );
    }
}
  
export default News;