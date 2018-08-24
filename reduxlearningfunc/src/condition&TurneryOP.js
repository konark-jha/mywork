import React from "react";

const Persons = ({ persons }) => {
  return (
    <div className="persons-list">
      {persons.map(newArray => {
        return newArray.age > 20 ? (
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
        ) : null;
      })}
    </div>
  );
};

//////////////////////////////////////////////////////////////////////////////
// OR
// const Persons = ({ persons }) => {
//   const peopleList = persons.map(newArray => {
//     if (newArray.age > 20) {
//       return (
//         <div className="person" key={newArray.id}>
//           <div>
//             Name:
//             {newArray.name}
//           </div>
//           <div>
//             Age:
//             {newArray.age}
//           </div>
//           <div>
//             Country:
//             {newArray.country}
//           </div>
//           <br />
//         </div>
//       );
//     } else {
//       return null;
//     }
//   });
//   return <div className="peopleList">{peopleList}</div>;
// };

export default Persons;
