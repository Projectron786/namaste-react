import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItem());
  };

  const handleRemoveItem = () => {
    dispatch(removeItem());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl">Cart</h1>
      <button
        className="bg-black text-white rounded-lg p-2 m-2"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && (
        <h1>Cart is already empty, Please add more Items!</h1>
      )}
      <button
        className="bg-black text-white rounded-lg p-2 m-2"
        onClick={handleRemoveItem}
      >
        Remove Item
      </button>
      <div className="w-6/12 m-auto p-10">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
