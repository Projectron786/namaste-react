import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import userContext from "../utils/userContext";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRatingString, sla } =
    resData?.info ?? {};

  const { loggedInUser } = useContext(userContext);

  return (
    <div className="p-4 m-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 ">
      <div>
        <img
          className="h-[250px] rounded-lg"
          src={CDN_URL + cloudinaryImageId}
        />
        <div>
          <h3 className="font-bold py-4 text-lg">{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRatingString}</h4>
          <h4>{sla?.slaString}</h4>
          <p>User : {loggedInUser}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
