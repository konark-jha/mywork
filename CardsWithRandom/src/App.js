import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import card1 from "./cards/card1.js";
import card2 from "./cards/card2.js";
import card3 from "./cards/card3.js";
import "./App.css";

function Cards(props) {
  return (
    <HashRouter>
      <div className="App">
        <div>
          <h1>Cards by Konark Jha...</h1>
          <ul className="App-header">
            <li>
              <NavLink to="/card1">First-Card</NavLink>
            </li>
            <li>
              <NavLink to="/card2">Second-card</NavLink>
            </li>
            <li>
              <NavLink to="/card3">Third-card</NavLink>
            </li>
          </ul>
          <div className="App-content">
            <Route path="/card1" component={card1} />
            <Route path="/card2" component={card2} />
            <Route path="/card3" component={card3} />
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default Cards;
