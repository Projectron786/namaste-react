import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("parent Component did mount");
  }

  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>I am Learning React Js from Akshay Saini</h2>
        <User name={"Abhishek Singh (function)"} />
        <UserClass name={"First"} location={"Bhopal Class"} />
      </div>
    );
  }
}

export default About;
