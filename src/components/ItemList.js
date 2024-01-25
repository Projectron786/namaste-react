import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="border-gray-300 border-b-2 p-2 m-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>- ₹{item.card.info.price / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <button className="absolute bg-white text-green-400 shadow-lg rounded-lg px-2 py-1 mx-10">
              Add +
            </button>
            <img
              className="h-auto"
              src={CDN_URL + item.card.info.imageId}
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
