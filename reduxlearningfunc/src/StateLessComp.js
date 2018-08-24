import React from "react";

const persons = ({ persons }) => {
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
};
export default persons;
