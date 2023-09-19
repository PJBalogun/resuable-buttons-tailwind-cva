import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css";

const nameList = [
  {
    first: "Clark",
    last: "Kent"
  },
  {
    first: "Clouk",
    last: "Gtat"
  },
  {
    first: "Teth",
    last: "Malone"
  },
  {
    first: "Sober",
    last: "Bayam"
  }
]


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />

  </React.StrictMode>
);
