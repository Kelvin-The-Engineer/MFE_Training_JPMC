import React from "react";
import "./App.css";
// import Greeting from "./components/Greeting";
import SongList from "./components/SongList";
function App() {
  // const firstPara = React.createElement("p", null, "This is paragraph1");
  // const secondPara = React.createElement("p", null, "This is paragraph2");
  // const myButton = React.createElement("button", null, "This is paragraph2");
  // const myList = React.createElement("ul", null, [
  //   React.createElement("li", { key: "fir" }, "first"),
  //   React.createElement("li", { key: "sec" }, "second"),
  //   React.createElement("li", { key: "thir" }, "third"),
  // ]);
  // const results = React.createElement("div", null, [
  //   firstPara,
  //   secondPara,
  //   myButton,
  //   myList,
  // ]);

  return (
    <>
      <SongList />
    </>
  );
}

export default App;
