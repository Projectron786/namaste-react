import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "secondchild" }, "this is my heading1!🚀"),
    React.createElement("h2", {}, "this is my heading2! 🚀"),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
