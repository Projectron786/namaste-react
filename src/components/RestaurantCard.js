import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRatingString, sla } =
    resData?.info ?? {};

  return (
    <div className="p-4 m-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 ">
      <div className="card">
        <img
          className="h-[250px] rounded-lg"
          src={CDN_URL + cloudinaryImageId}
        />
        <div className="card-content">
          <h3 className="font-bold py-4 text-lg">{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRatingString}</h4>
          <h4>{sla?.slaString}</h4>
        </div>
      </div>
    </div>
  );
};

// Higher Order Component

export default RestaurantCard;
