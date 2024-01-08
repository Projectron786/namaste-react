import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";

const Body = () => {
  return (
    <div className="body-container">
      <div>Search</div>
      <div className="card-container">
        {resList.map((Restaurant) => (
          <RestaurantCard key={Restaurant.id} resData={Restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body.js;
