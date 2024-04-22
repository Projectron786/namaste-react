import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    // console.log(this.props.name + "child constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child Component did mount");

    const data = await fetch("https://api.github.com/users/Abhishek30061998");
    const json = await data.json();

    // console.log(json);
  }

  render() {
    const { name, location } = this.props;
    //console.log(this.props.name + "child render");
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact: @abhishek</h4>
      </div>
    );
  }
}

export default UserClass;
