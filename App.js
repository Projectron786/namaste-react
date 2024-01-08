import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm5RFDmJ_kEY3RBIRLEupEecBjKX_Tsn3Drg&usqp=CAU"
          alt="food"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
    id: "101059",
    name: "Manohar Dairy and Restaurant",
    cloudinaryImageId: "yhnrql8wxgu8sgqjczos",
    locality: "Hamidia Road",
    areaName: "Hamidia Road",
    costForTwo: "₹300 for two",
    cuisines: [
      "Sweets",
      "Beverages",
      "Desserts",
      "Snacks",
      "Chaat",
      "Street Food",
      "Chinese",
      "Bakery",
      "North Indian",
      "South Indian",
    ],
    avgRating: 4.4,
    veg: true,
    parentId: "7052",
    avgRatingString: "4.4",
    totalRatingsString: "10K+",
    deliverytime: "30",
  },
  {
    id: "101059",
    name: "Manohar Dairy and Restaurant",
    cloudinaryImageId: "yhnrql8wxgu8sgqjczos",
    locality: "Hamidia Road",
    areaName: "Hamidia Road",
    costForTwo: "₹300 for two",
    cuisines: [
      "Sweets",
      "Beverages",
      "Desserts",
      "Snacks",
      "Chaat",
      "Street Food",
      "Chinese",
      "Bakery",
      "North Indian",
      "South Indian",
    ],
    avgRating: 4.4,
    veg: true,
    parentId: "7052",
    avgRatingString: "4.4",
    totalRatingsString: "10K+",
    deliverytime: "30",
  },
  {
    id: "101059",
    name: "Manohar Dairy and Restaurant",
    cloudinaryImageId: "yhnrql8wxgu8sgqjczos",
    locality: "Hamidia Road",
    areaName: "Hamidia Road",
    costForTwo: "₹300 for two",
    cuisines: [
      "Sweets",
      "Beverages",
      "Desserts",
      "Snacks",
      "Chaat",
      "Street Food",
      "Chinese",
      "Bakery",
      "North Indian",
      "South Indian",
    ],
    avgRating: 4.4,
    veg: true,
    parentId: "7052",
    avgRatingString: "4.4",
    totalRatingsString: "10K+",
    deliverytime: "30",
  },
  {
    id: "101059",
    name: "Manohar Dairy and Restaurant",
    cloudinaryImageId: "yhnrql8wxgu8sgqjczos",
    locality: "Hamidia Road",
    areaName: "Hamidia Road",
    costForTwo: "₹300 for two",
    cuisines: [
      "Sweets",
      "Beverages",
      "Desserts",
      "Snacks",
      "Chaat",
      "Street Food",
      "Chinese",
      "Bakery",
      "North Indian",
      "South Indian",
    ],
    avgRating: 4.4,
    veg: true,
    parentId: "7052",
    avgRatingString: "4.4",
    totalRatingsString: "10K+",
    deliverytime: "30",
  },
  {
    id: "101059",
    name: "Manohar Dairy and Restaurant",
    cloudinaryImageId: "yhnrql8wxgu8sgqjczos",
    locality: "Hamidia Road",
    areaName: "Hamidia Road",
    costForTwo: "₹300 for two",
    cuisines: [
      "Sweets",
      "Beverages",
      "Desserts",
      "Snacks",
      "Chaat",
      "Street Food",
      "Chinese",
      "Bakery",
      "North Indian",
      "South Indian",
    ],
    avgRating: 4.4,
    veg: true,
    parentId: "7052",
    avgRatingString: "4.4",
    totalRatingsString: "10K+",
    deliverytime: "30",
  },
  {
    id: "101059",
    name: "Manohar Dairy and Restaurant",
    cloudinaryImageId: "yhnrql8wxgu8sgqjczos",
    locality: "Hamidia Road",
    areaName: "Hamidia Road",
    costForTwo: "₹300 for two",
    cuisines: [
      "Sweets",
      "Beverages",
      "Desserts",
      "Snacks",
      "Chaat",
      "Street Food",
      "Chinese",
      "Bakery",
      "North Indian",
      "South Indian",
    ],
    avgRating: 4.4,
    veg: true,
    parentId: "7052",
    avgRatingString: "4.4",
    totalRatingsString: "10K+",
    deliverytime: "30",
  },
  {
    id: "101059",
    name: "Manohar Dairy and Restaurant",
    cloudinaryImageId: "yhnrql8wxgu8sgqjczos",
    locality: "Hamidia Road",
    areaName: "Hamidia Road",
    costForTwo: "₹300 for two",
    cuisines: [
      "Sweets",
      "Beverages",
      "Desserts",
      "Snacks",
      "Chaat",
      "Street Food",
      "Chinese",
      "Bakery",
      "North Indian",
      "South Indian",
    ],
    avgRating: 4.4,
    veg: true,
    parentId: "7052",
    avgRatingString: "4.4",
    totalRatingsString: "10K+",
    deliverytime: "30",
  },
  {
    id: "101059",
    name: "Manohar Dairy and Restaurant",
    cloudinaryImageId: "yhnrql8wxgu8sgqjczos",
    locality: "Hamidia Road",
    areaName: "Hamidia Road",
    costForTwo: "₹300 for two",
    cuisines: [
      "Sweets",
      "Beverages",
      "Desserts",
      "Snacks",
      "Chaat",
      "Street Food",
      "Chinese",
      "Bakery",
      "North Indian",
      "South Indian",
    ],
    avgRating: 4.4,
    veg: true,
    parentId: "7052",
    avgRatingString: "4.4",
    totalRatingsString: "10K+",
    deliverytime: "30",
  },
  {
    id: "101059",
    name: "Manohar Dairy and Restaurant",
    cloudinaryImageId: "yhnrql8wxgu8sgqjczos",
    locality: "Hamidia Road",
    areaName: "Hamidia Road",
    costForTwo: "₹300 for two",
    cuisines: [
      "Sweets",
      "Beverages",
      "Desserts",
      "Snacks",
      "Chaat",
      "Street Food",
      "Chinese",
      "Bakery",
      "North Indian",
      "South Indian",
    ],
    avgRating: 4.4,
    veg: true,
    parentId: "7052",
    avgRatingString: "4.4",
    totalRatingsString: "10K+",
    deliverytime: "30",
  },
];

const RestaurentCard = (props) => {
  const { resData } = props;

  return (
    <div className="res-card">
      <div className="card">
        <img
          alt="restaurent image"
          src="https://b.zmtcdn.com/data/pictures/chains/8/20064268/8bca4bf63008143f7d6be0a16d398843_o2_featured_v2.jpg?output-format=webp"
        />
        <div className="card-content">
          <h3>{resData.name}</h3>
          <h4>{resData.cuisines}</h4>
          <h4>{resData.avgRatingString}</h4>
          <h4>{resData.deliverytime} minutes</h4>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-container">
      <div>Search</div>
      <div className="card-container">
        <RestaurentCard resData={resList[0]} />
        <RestaurentCard resData={resList[1]} />
        <RestaurentCard resData={resList[2]} />
        <RestaurentCard resData={resList[3]} />
        <RestaurentCard resData={resList[4]} />
        <RestaurentCard resData={resList[5]} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
