import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  render() {
    const details = {
      name: "Tiger",
      number: 3891,
      endangered: true
    };
    return (
      <div className="App">
        <h3>Destructure Object...</h3>
        <Animal details={details}>
          <h1>Endangered Animals</h1>
        </Animal>

        <hr />
        <h3>Destructure Spread...</h3>
        <Animal2 {...details} />

        <hr />
        <h3> Children Props </h3>
        <Animal1 name="Tiger" number={1234} endangered={true}>
          <h3>Endangered Animals</h3>
        </Animal1>
      </div>
    );
  }
}

const Animal = (props) => {
  const { name, number, endangered } = props.details;
  return (
    <div>
      <p> name: {name}</p>
      <p> number: {number}</p>
      <p> endangered: {endangered ? "Yes" : "No"}</p>
    </div>
  );
};

const Animal1 = (props) => {
  const { name, number, endangered, children } = props;
  return (
    <div>
      {children}
      <p> name: {name}</p>
      <p> number: {number}</p>
      <p> endangered: {endangered ? "Yes" : "No"}</p>
    </div>
  );
};

class Animal2 extends Component {
  render() {
    const { name, number, endangered } = this.props;
    return (
      <div>
        <p> name: {name}</p>
        <p> number: {number}</p>
        <p> endangered: {endangered ? "Yes" : "No"}</p>
      </div>
    );
  }
}

export default App;
