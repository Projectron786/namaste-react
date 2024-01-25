import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div>
      <div className="bg-gray-200 w-6/12 shadow-lg mx-auto my-2 px-2 py-4">
        <div
          className=" flex justify-between px-4 cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-md">
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span>🔻</span>
        </div>
        <div>{showItems && <ItemList items={data?.itemCards} />}</div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
