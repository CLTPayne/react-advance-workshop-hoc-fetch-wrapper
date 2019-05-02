import React from "react";
import ReactDOM from "react-dom";
import fetchHOC from "./fetchHOC";
import "./styles.css";

let App = ({ loading, data, error }) => {
  if (loading) return <div>Loading...</div>;
  if (data) {
    return (
      <ul>
        {data.map(user => (
          <li key={user.id}>
            {user.name} = {user.email}
          </li>
        ))}
      </ul>
    );
  }
  if (error) return "Woops, something went wrong. Try and refresh the page.";
  return null;
};

App = fetchHOC({ url: "https://jsonplaceholder.typicode.com/users" })(App);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
