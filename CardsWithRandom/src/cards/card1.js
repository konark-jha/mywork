import React, { Component } from "react";
import { getRandomCardImageUrl, getRandomCard1Text, svgImg } from "../avatar";
import "../res/css/card1.css";

class Card1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: getRandomCard1Text().heading,
      subtext: getRandomCard1Text().subtext,
      tag: getRandomCard1Text().tag,
      img: getRandomCardImageUrl(),
      locTag: svgImg.locTag
    };
  }

  render() {
    console.log(getRandomCard1Text());
    return (
      <div
        className="Card1-img"
        style={{
          background: "url(" + this.state.img + ")",
          backgroundSize: 400,
          height: 500
        }}
      >
        <div className="Card1-btn">{this.state.tag}</div>
        <div className="Card1-text1">{this.state.heading}</div>
        <img src={this.state.locTag} className="Card1-location" alt="locTag" />
        <div className="Card1-text2">{this.state.heading}</div>
      </div>
    );
  }
}
export default Card1;
