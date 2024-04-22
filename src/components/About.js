import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";


class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About Class Component</h1>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>I am Learning React Js from Akshay Saini</h2>
        <User name={"Abhishek Singh (function)"} />
        <UserClass name={"First"} location={"Bhopal Class"} />
      </div>
    );
  }
}

export default About;
