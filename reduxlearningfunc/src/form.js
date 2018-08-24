import React from "react";

class Form extends React.Component {
  state = {
    name: "enterName",
    heading: "Submit Name in Field "
  };
  handelChange = e => {
    this.setState({
      name: e.target.value
    });
  };
  handelSubmit = e => {
    e.preventDefault();
    console.log("form submitted!!", this.state.name);
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.heading}</h1>
        <h2>My Name is {this.state.name}</h2>
        <form onSubmit={this.handelSubmit}>
          <input type="text" onChange={this.handelChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
