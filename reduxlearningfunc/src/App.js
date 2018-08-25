import React from "react";
import ReactDom from "react-dom";
import Form from "./form";
import Propss from "./Propss";
import MapsList from "./MapList";
import StateLessComp from "./StateLessComp";
import ConditionOp from "./condition&TurneryOP";
import AddPerson from "./AddPerson";
import "./App.css";
const personsArray = [
  {
    name: "Alpha",
    age: 21,
    country: "Aus",
    id: 1
  },
  {
    name: "Beta",
    age: 22,
    country: "US",
    id: 2
  },
  {
    name: "gama",
    age: 15,
    country: "UK",
    id: 3
  },
  {
    name: "Delta",
    age: 17,
    country: "IN",
    id: 4
  }
];
class App extends React.Component {
  state = {
    name: "konark jha",
    age: 26,
    text: "hiiiii there",
    personsArray
  };

  addPerson = P => {
    P.id = Math.random(); //To Create Random Id For new Element
    let person = [...this.state.personsArray, P]; // Using Spread operator so that new elements can be add to our Array
    this.setState({
      personsArray: person
    });
  };
  handelClick = e => {
    console.log(this.state);
    this.setState({
      name: "konark",
      age: 25,
      text: "text changed on click"
    });
  };
  handelMouseHover = e => {
    console.log(e.target, e.pageX);
    this.setState({
      name: "Yolo",
      age: 123,
      text: "text changed on hover"
    });
  };
  handelCopy = e => {
    console.log("try being orignal for once!!");
    this.setState({
      text: "try being orignal for once!!"
    });
  };

  render() {
    return (
      <div className="App">
        <p>NO: 1</p>
        <h1>{this.state.text}</h1>
        <p>
          my name is {this.state.name} and ny age is {this.state.age}
        </p>
        <button onClick={this.handelClick}> Click Me </button>
        <button onMouseOver={this.handelMouseHover}> Hover Me </button>
        <p onCopy={this.handelCopy}>Copy this</p>
        <p>*/////////////////////////////////////////////////////*</p>
        <p>NO: 2</p>
        <Form />
        <br /> <br /> <br /> <br /> <br /> <br />
        <p>NO: 3</p>
        <p>*\\\\\\\\\\\\\\\\\\\\\\\\\I\G\N\O\R\E\\\\\\\\\\\\\\\\\\\\\\\\\*</p>
        <Propss name="foo" age="10" country="India" />
        <p>NO: 4</p>
        <p>*------------F-E-T-C-H--C-O-M-P-L-E-T-E-A-R-R-A-Y---------*</p>
        <MapsList persons={this.state.personsArray} />
        <p>
          <p>NO: 5</p>
          *----------------S-T-A-T-E-L-E-S-S--C-O-M-P-O-N-E-N-T------------------*
        </p>
        <StateLessComp persons={this.state.personsArray} />
        <p>
          <p>NO: 6</p>
          *--------------C-O-N-D-I-T-I-O-N--T-U-R--O-P-R-E-A-T-O-R---------*
        </p>
        <ConditionOp persons={this.state.personsArray} />
        <p>NO: 7</p>
        <p>*------------------A-D-D--P-E-R-S-O-N-----------------------*</p>
        <AddPerson addPerson={this.addPerson} />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));

export default App;
