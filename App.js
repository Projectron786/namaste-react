const heading = React.createElement(
  "h1",
  { id: "heading" },
  "this is a heading!"
);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
