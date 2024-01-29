import { useEffect, useState } from "react";
import { CARD_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const onlineStatus = useOnlineStatus();

  // Whenever State Variable updates, react trigger a reconciliation cycle (re-render the component)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(CARD_URL);

    const json = await data.json();

    // Optional Chaining
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (onlineStatus === false)
    return (
      <h1>
        "Look's like you are offline!!, Please check your internet connection"
      </h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex">
        <div>
          <input
            type="text"
            className="border border-solid border-black m-4"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="bg-green-100 px-2 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center px-2 mx-2">
          <button
            className=" bg-gray-200 px-2 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurant.map((Restaurant) => (
          <Link
            key={Restaurant.info.id}
            to={"restaurants/" + Restaurant.info.id}
          >
            {/* // Create a Higher Order component to display promotes restaurant feature! */}
            <RestaurantCard resData={Restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
