import React from "react";

class Hello extends React.Component {
  constructor(props) {
    super(props);
    console.log("Hello constructor");
  }
  componentDidMount() {
    console.log("hello did mount");
  }
  render() {
    console.log("Hello Render");
    return <h1>Hello i am srinu</h1>;
  }
}

export default Hello;
