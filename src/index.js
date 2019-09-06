import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Quiz from "./Quiz";
import * as serviceWorker from "./serviceWorker";

const authors = [
  {
    name: "Conor Mcgregor",
    imageUrl: "images/authors/mc.jpg",
    books: ["The notorious", "mystic mac", "OG"]
  },
  {
    name: "Jon Jones",
    imageUrl: "images/authors/jones.jpg",
    books: ["Bones", "pictogram", "GOAT"]
  },
  {
    name: "Khabib",
    imageUrl: "khabib.jpg",
    books: ["grapper", "smesh", "The Eagle"]
  }
];

const state = {
  turnData: {
    authors: authors[0],
    books: authors[0].books
  }
};
ReactDOM.render(<Quiz {...state} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
