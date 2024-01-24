import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  // if no dependency array => useEffect is called on every render
  // if empty dependency array = [] => useEffect is called on intial render(just once)
  // if dependency array = [btnName] => useEffect is called everytime btnName is updated
  // const useEffect(() => {

  // });

  return (
    <div className="flex justify-between shadow-lg sm:bg-blue-400 md:bg-green-200 lg:bg-pink-100">
      <div>
        <img className="w-20 m-2" src={LOGO_URL} alt="food" />
      </div>
      <div>
        <ul className="flex p-2 m-2 items-center">
          <li className="px-2">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">Cart</li>
          <button
            className="px-2"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
