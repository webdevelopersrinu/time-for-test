import React from "react";
import User from "./User";

import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

// const About = () => {

//   return (
//     <>
//       <h1>About us</h1>
//       <User name={"srinu"} />
//       <UserClass name={"ravi"} />
//     </>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent Constructor");
  }
  componentDidMount() {
    // console.log("parent component is mount");
  }

  render() {
    // console.log("parent render");
    return (
      <>
        <h1>About us</h1>
        <UserContext.Consumer>
          {({name})=> <h1>{name}</h1>}
        </UserContext.Consumer>
        <UserClass name={"first"} />
      </>
    );
  }
}

export default About;
