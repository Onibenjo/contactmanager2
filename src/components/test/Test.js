import React, { Component } from "react";

class Test extends Component {
  componentDidMount() {
    console.log("componentDidMount...");
  }

  componentWillMount() {
    console.log("componentWillMount...");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate...");
  }
  componentWillUpdate() {
    console.log("componentDidUpdate...");
  }
  componentWillReceiveProps(nextProps, nestState) {}

  render() {
    return (
      <div>
        <h1>Test Components</h1>
      </div>
    );
  }
}

export default Test;
