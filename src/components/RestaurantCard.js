import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRatingString, deliverytime } =
    resData;

  return (
    <div className="res-card">
      <div className="card">
        <img alt="restaurant image" src={CDN_URL + cloudinaryImageId} />
        <div className="card-content">
          <h3>{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRatingString}</h4>
          <h4>{deliverytime} minutes</h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
