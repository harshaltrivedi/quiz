import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./bootstrap.min.css";

function Hero() {
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>UFC QUIZ</h1>
        <p>select the right answer to continue playing</p>
      </div>
    </div>
  );
}

function Book({ title }) {
  return (
    <div className="answer">
      <h4>{title}</h4>
    </div>
  );
}

function Turn({ authors, books }) {
  return (
    <div className="row turn" style={{ backgroundColor: "white" }}>
      <div className="col-4 offset-1">
        <img src={authors.imageUrl} className="authorimage" alt="Author" />
      </div>
      <div className="col-6">
        {books.map(title => (
          <Book title={title} key={title}></Book>
        ))}
      </div>
    </div>
  );
}

function Continue() {
  return <div></div>;
}

function Quiz({ turnData }) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turnData} />
      <Continue />
    </div>
  );
}

export default Quiz;
