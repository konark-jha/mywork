import React, { Component } from "react";

class MapsList extends Component {
  render() {
    const { persons } = this.props; // or const people = this.props.prople;
    const peopleList = persons.map(newArray => {
      return (
        <div className="person" key={newArray.id}>
          <div>
            Name:
            {newArray.name}
          </div>
          <div>
            Age:
            {newArray.age}
          </div>
          <div>
            Country:
            {newArray.country}
          </div>
          <br />
        </div>
      );
    });
    return <div>{peopleList}</div>;
  }
}

export default MapsList;
