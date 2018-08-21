import React, { Component } from "react";
import card1_Img from "../res/img/card1_img.png";
import locTag from "../res/logo/Location.svg";
import { SingleFeedData } from "../routes/FeedsData.js";
import "../res/css/card1.css";

class Card1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "Fishing In The Congo",
      subtext: "Democratic Republic of the Congo",
      tag: "Domestic"
    };
  }
  render() {
    console.log(SingleFeedData[1]);
    return (
      // <div>

      <div
        className="Card1-img"
        style={{
          background: "url(" + card1_Img + ")",
          backgroundSize: 400,
          height: 500
        }}
      >
        <div className="Card1-btn">{this.state.tag}</div>
        <div className="Card1-text1">{this.state.heading}</div>
        <img src={locTag} className="Card1-location" alt="locTag" />
        <div className="Card1-text2">{this.state.heading}</div>
      </div>
    );
  }
}
export default Card1;
