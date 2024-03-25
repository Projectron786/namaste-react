import { useContext } from "react";
import UserContext from "../utils/UserContext";

const User = ({ name }) => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: Bhopal</h3>
      <h4>Contact: @abhishek</h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

export default User;
