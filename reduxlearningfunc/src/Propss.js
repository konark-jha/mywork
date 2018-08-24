import React, { Component } from "react";

class Propss extends Component {
  render() {
    const { name, age, country } = this.props;
    return (
      <div>
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Country: {country}</div>
      </div>
    );
  }
}
export default Propss;
