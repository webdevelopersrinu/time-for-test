import React from "react";
import { Await } from "react-router-dom";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name + "child constructor");
    this.state = {
      gitHub: { name: "srinu", bio: "hello" },
    };
  }
  async componentDidMount() {
    // console.log(this.props.name + "child component is mount");
    const data = await fetch("https://api.github.com/users/webdevelopersrinu");
    const json = await data.json();
    this.setState({
      gitHub: json,
    });
  }
  render() {
    const { name, bio } = this.state.gitHub;

    // console.log(this.props.name + "child Render");
    return (
      <>
        <h2>{name}</h2>
        <h3>{bio}</h3>
      </>
    );
  }
}

export default UserClass;
