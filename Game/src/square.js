import React from "react";
import "./Game.css";

class Square extends React.Component {
  render() {
    return (
      <button className="Game-square" onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}

export default Square;
