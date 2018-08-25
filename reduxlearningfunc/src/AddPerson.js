import React, { Component } from "react";

class AddPerson extends Component {
  state = {
    name: null,
    age: null,
    country: null
  };
  handelChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handelSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.addPerson(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handelSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handelChange} />
          <label htmlFor="name">Age:</label>
          <input type="text" id="age" onChange={this.handelChange} />
          <label htmlFor="name">Country:</label>
          <input type="text" id="country" onChange={this.handelChange} />
          <button>Submit!</button>
          <br /> <br /> <br /> <br /> <br />
        </form>
      </div>
    );
  }
}
export default AddPerson;
